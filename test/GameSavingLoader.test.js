import GameSavingLoader from '../src/js/GameSavingLoader';
import json from '../src/js/parser';
import read from '../src/js/reader';

const UniTestData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('Test GameSavingLoader', (done) => {
  const expected = JSON.parse(UniTestData);
  GameSavingLoader.load().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
    done();
  });
});

test('Test read & parse', (done) => {
  const expected = UniTestData;
  read().then((dat) => {
    json(dat).then((result) => {
      expect(result).toEqual(expected);
      done();
    });
  });
});

test('reader result length', (done) => {
  read().then((dat) => {
    expect(dat).toBeDefined();
    done();
  });
});
