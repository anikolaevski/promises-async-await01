/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/newline-after-import
import { readGameSaving } from './readGameSaving';
export class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static load() {
    // let value;
    const data = readGameSaving()
      .then( (data) => {
        console.log(2, data);       // ArrayBuffer(178)
        console.log(3, data.json()); // Uncaught (in promise) TypeError: data.json is not a function
      });
    return data;
  }
}
