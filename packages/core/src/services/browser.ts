import {injectable, inject} from 'inversify';
import PCR from 'puppeteer-chromium-resolver';
import { Browser, Page, PuppeteerNode } from 'puppeteer-core';
import {EventEmitter} from 'events';

// function extendObject<T, N>(targetObj: T, newClass: N): T & N {
//   // Returns a Proxy that extends the target object and adds constructability
//   return new Proxy(targetObj, {
//     construct: function(target, args) {
//       return new newClass(...args);
//     }
//   });
// }

// We will have puppeteer itself as a singleton
@injectable()
export class BrowserService {
  private puppeteer: PuppeteerNode;

  private events = new EventEmitter();

  browser: Browser;

  pool: Page[] = [];

  maxPoolSize = 3;

  async resolve() {
    // TODO: proxy config will be handled automatically here
    if(!this.browser) {
      console.log('Launching browser');
      // TODO: The browser may already be open from another process, so we can try and reuse that
      // Though we may run into an issue where the browser's lifecycle is managed
      const {puppeteer, executablePath} = PCR.getStats() as {puppeteer: PuppeteerNode, executablePath: string};
      this.puppeteer = puppeteer;
      this.browser = await puppeteer.launch({executablePath, headless: true});
      this.browser.on('close', () => {
        // The browser has been closed so we may need to re-open it
        this.browser = null;
      });
    }
    return this.browser;
  }

  async page(): Promise<Page> {
    // TODO: to save resources this represents a page pool. When a page is requested, block until the pool has a slot available
    const browser = await this.resolve();
    if(this.pool.length >= this.maxPoolSize) {
      // Wait for a slot to become available
      return new Promise(async (resolve) => {
        this.events.once('slot-available', () => resolve(this.page()));
      });
    }
    const page = await browser.newPage();
    this.pool.push(page);
    page.once('close', () => {
      // Remove the page from the pool
      const index = this.pool.indexOf(page);
      if(index !== -1) {
        this.pool.splice(index, 1);
      }
      this.events.emit('slot-available');
    });
    return page;
  }
}

// represents a single page unique to the request
@injectable()
export class PageService {

  @inject(BrowserService)
  private browser: BrowserService;

  async open(url: string) {
    // This should probably warn/prevent extensions from opening pages on unacceptable domains for the archiver.
    // Each archiver should also be allowed to specify a profile to use.
    const page = await this.browser.page();
    await page.goto(url);
    return page;
  }
}