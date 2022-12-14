import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('You recever a friends notifications');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it should not be able to create a notification content', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
