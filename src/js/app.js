// TODO: write code here
import { GameSavingLoader } from './GameSavingLoader';
import { GameSavingData } from './GameSavingData';
import { readGameSaving } from './readGameSaving';

// const sourceObject = {
//   id: 123456, // id сохранения
//   created: Date.now(), // timestamp создания
//   userInfo: {
//     id: 67890, // user id
//     name: 'Иванов Иван Иванович', // user name
//     level: 80, // user level
//     points: 222, // user points
//   },
// };

const data = GameSavingLoader.load();
console.log(1, data);
