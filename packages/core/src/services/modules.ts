import {ContainerModule} from "inversify";

import {HttpAgent} from "./http";
import {BrowserService, PageService} from './browser';

export const CheapArchiverModules = new ContainerModule((bind) => {
  bind(BrowserService).toSelf().inSingletonScope();
  bind(HttpAgent).toSelf().inTransientScope();
  bind(PageService).toSelf().inTransientScope();
});
