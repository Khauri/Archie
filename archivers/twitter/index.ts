import {PageService, ThreadArchiver} from '@archie/core';
import {inject} from 'inversify';

export default class TwitterThreadArchiver {
  @inject(PageService)
  private page: PageService;

  // TODO
  async archive(context) {
    console.log('Archiving twitter thread', context.source);
    await this.page.open(context.source);
  }
}