import {injectable} from "inversify";

// An archiver should implement this interface
export type ThreadArchiveContext = {
  source: string;
}

export interface ThreadArchiver<Config extends Object = unknown> {
  init: (config: Config) => Promise<void>;
  archive: (context: ThreadArchiveContext) => Promise<void>;
}

export type DestinationResolverFunction = (context: {
  ext?: string;
  name?: string;
}) => {filepath: string, directory: string, filename: string};

// Should probably be renamed to AudioVideoArchiver
export type MediaArchiverContext = {
  source: string;
  startTime?: number; // in ms
  endTime?: number; // in ms
  destination: DestinationResolverFunction;
}

// Media archivers might be able to handle post-processing of the media
// (e.g. transcoding, resizing, etc.) and should therefor return metadata
// about the resulting file so that archie does not have to re-process it.
export type MediaArchiverResult = {
  originalLength?: number; // in ms
  finalLength?: number; // in ms
  originalStartTime?: number; // in ms
  finalStartTime?: number; // in ms
  originalEndTime?: number; // in ms
  finalEndTime?: number; // in ms
  originalFileType?: string;
  finalFileType?: string;
}

export interface MediaArchiver<Config extends Object = unknown> {
  init: (config: Config) => Promise<void> | void;
  archive: (context: MediaArchiverContext) => Promise<MediaArchiverResult | null>;
}
