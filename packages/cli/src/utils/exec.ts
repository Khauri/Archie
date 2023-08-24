import {exec} from 'child_process';

export function execPromise(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if(err) {
        reject(err);
      } else {
        resolve({stdout, stderr});
      }
    });
  });
}