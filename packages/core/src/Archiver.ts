import {injectable} from "inversify";

// An archiver should implement this interface
type ThreadArchiveContext = {
  source: string;
}

export interface ThreadArchiver<Config extends Object = unknown> {
  init: (config: Config) => Promise<void>;
  archive: (context: ThreadArchiveContext) => Promise<void>;
}

// Should probably be renamed to AudioVideoArchiver
type MediaArchiverContext = {
  source: string;
  startTime?: number; // in ms
  endTime?: number; // in ms
}

// Media archivers might be able to handle post-processing of the media
// (e.g. transcoding, resizing, etc.) and should therefor return metadata
// about the resulting file so that archie does not have to re-process it.
type MediaArchiverResult = {
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
