/* eslint-disable import/prefer-default-export */
export class GameSavingData {
  constructor(data) {
    this.data = data;
  }

  json() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(this.data)));
      }, 1000);
    });
  }
}
