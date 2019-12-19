import GameSavingLoader from '../src/js/GameSavingLoader';
import json from '../src/js/parser';
import read from '../src/js/reader';

test('Test GameSavingLoader', () => {
  const expected = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  GameSavingLoader.load().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});


test('Test read & parse', () => {
  const expected = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  read().then((dat) => {
    json(dat).then((data) => {
      const result = JSON.parse(data);
      expect(result).toEqual(expected);
    });
  });
});
