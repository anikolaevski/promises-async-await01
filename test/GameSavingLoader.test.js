import GameSavingLoader from '../src/js/GameSavingLoader';
import json from '../src/js/parser';
import read from '../src/js/reader';

const UniTestData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('Test GameSavingLoader', () => {
  const expected = JSON.parse(UniTestData);
  GameSavingLoader.load().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});

test('Test read & parse', () => {
  const expected = UniTestData;
  read().then((dat) => {
    json(dat).then((result) => {
      expect(result).toEqual(expected);
    });
  });
});

test('reader', () => {
  const expected = 180;
  read().then((dat) => {
    expect(dat.length).toBe(expected);
  })

})