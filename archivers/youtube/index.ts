import {PageService, MediaArchiver} from '@archie/core';
import {inject} from 'inversify';
import ytdl from 'ytdl-core';
import * as fs from 'fs';

type YouTubeMediaArchiverConfig = {

}

export default class YouTubeMediaArchiver implements MediaArchiver<YouTubeMediaArchiverConfig> {
  init (config) {
    console.log({config});
  }

  async archive(context) {
    const isValid = ytdl.validateURL(context.source);
    // Try output path or whatever
    const stream = ytdl(context.source)
      .pipe(fs.createWriteStream('video.mp4'));
    await new Promise((resolve, reject) => {
      stream.on('finish', resolve);
      stream.on('error', reject);
    });
    return null;
  }
}