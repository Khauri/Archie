import {PageService, ThreadArchiver} from '@archie/core';
import {inject} from 'inversify';

const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';

/**
 * Translates text numbers to Numbers
 * eg: 1.2k -> 1200, 1.2m -> 1200000
 */
function translateTextNumber(str) {
  const num = parseFloat(str);
  if(str.includes('k')) {
    return num * 1000;
  }
  if(str.includes('m')) {
    return num * 1000000;
  }
  return num;
}

type ExtractionRule = {
  el: string;
  property?: string;
  attribute?: string;
  transform?: <T>(value: any) => T;
}

const extractionRules = {
  text: {el: '[data-testid="tweetText"] span', property: 'innerText'},
  createdAt: {el: 'time', attribute: 'datetime'},
  likes: {el: 'a[href*="likes"]', property: 'innerText', transform: translateTextNumber},
  userName: {el: 'div[data-testid="User-Names"] > div:first-of-type a', property: 'innerText'},
  userHandle: {el: 'div[data-testid="User-Names"] > div:last-of-type a', property: 'innerText'},
  userAvatar: {el: '[data-testid="Tweet-User-Avatar"] img', attribute: 'src'}
} as Record<string, ExtractionRule>;

export default class TwitterThreadArchiver {
  @inject(PageService)
  private page: PageService;

  // TODO
  async archive(context) {
    console.log('Archiving twitter thread', context.source);
    // Twitter blocks requests from headless browsers
    const page = await this.page.open(context.source, {userAgent});
    await page.waitForSelector('article[data-testid="tweet"]', {timeout: 10000});
    const visibleTweets = await page.$$('article[data-testid="tweet"]');
    const root = visibleTweets.at(0);
    if(!root) {
      return
    }
    // TODO: abstract this into a lib within core or something
    const extracted = {};
    for(const [key, rule] of Object.entries(extractionRules)) {
      const {el} = rule;
      let value = await root.$eval(el, (el, rule) => {
        if(rule.attribute) {
          return el.getAttribute(rule.attribute);
        } else if(rule.property) {
          return el[rule.property];
        }
      }, rule);
      if(rule.transform) {
        value = rule.transform(value);
      }
      extracted[key] = value;
    }
    console.log(extracted);
  }
}