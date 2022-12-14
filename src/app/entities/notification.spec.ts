import { Content } from './content';
import { Notification } from './notifications';

describe('Notification ', () => {
  it('it should be able to create a notification ', () => {
    const notification = new Notification({
      content: new Content('New friend solitition '),
      category: 'social',
      recipientId: 'id receiped',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });

  it('it should not be able to create a notification content', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('it should not be able to create a notification content', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
