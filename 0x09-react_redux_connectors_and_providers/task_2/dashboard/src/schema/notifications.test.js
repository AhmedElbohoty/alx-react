import getAllNotificationsByUser from './notifications';

describe('getAllNotificationsByUser', () => {
  test('Returns empty array', () => {
    const userId = 'No user with this id';
    const result = [];

    const contexts = getAllNotificationsByUser(userId);

    expect(contexts).toEqual(expect.arrayContaining(result));
  });

  test('Returns the correct notifications for a given userId', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const result = [
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
        isRead: true,
        type: 'urgent',
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
    ];

    const contexts = getAllNotificationsByUser(userId);

    expect(contexts).toEqual(expect.arrayContaining(result));
  });
});
