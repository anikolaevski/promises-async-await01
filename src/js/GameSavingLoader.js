import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      read()
        .then((buffer) => {
          // console.log(buffer);
          json(buffer)
            .then((data) => {
              resolve(data);
            });
        });
    });
  }
}
