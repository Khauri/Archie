import {PageService, MediaArchiver, MediaArchiverContext, MediaArchiverResult} from '@archie/core';
import {inject} from 'inversify';
import ytdl from 'ytdl-core';
import * as fs from 'fs';

type YouTubeMediaArchiverConfig = {

}

export default class YouTubeMediaArchiver implements MediaArchiver<YouTubeMediaArchiverConfig> {
  init (config) {
    // console.log({config});
  }

  async archive(context: MediaArchiverContext) : Promise<MediaArchiverResult | null>{
    const isValid = ytdl.validateURL(context.source);
    if(!isValid) {
      throw new Error('Invalid YouTube URL');
    }
    const info = await ytdl.getInfo(context.source);
    // Try output path or whatever
    const output = context.destination({name: info.videoDetails.title, ext: 'mp4'});
    // Create the directory if it doesn't exist
    if(!fs.existsSync(output.directory)) {
      fs.mkdirSync(output.directory, {recursive: true});
    }
    const stream = ytdl(context.source)
      .pipe(fs.createWriteStream(output.filepath, {flags: 'w'}));
    await new Promise((resolve, reject) => {
      stream.on('finish', resolve);
      stream.on('error', reject);
    });
    return null;
  }
}
