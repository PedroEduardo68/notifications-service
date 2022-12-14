import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('You recever a friends notifications');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create a notification content', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
