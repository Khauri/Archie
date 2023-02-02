// Built-in Extractor Plugin
import {PageService} from './services';
import {inject} from 'inversify';
import {extractByRules} from './extractor';

const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';

export class Extract {

  @inject(PageService)
  private page: PageService;

  async extract(context) {
    console.log('Extracting from source:', context.source);
    const page = await this.page.open(context.source, {userAgent});
    const extracted = await extractByRules(page, context.rules);
    return extracted;
  }
}