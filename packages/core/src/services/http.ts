// Perform HTTP requests
import {injectable} from "inversify";
import superagent from 'superagent';

@injectable()
export class HttpAgent {
  agent = superagent.agent();
}