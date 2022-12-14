import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('You recever a friends notifications');

  expect(content).toBeTruthy();
});
