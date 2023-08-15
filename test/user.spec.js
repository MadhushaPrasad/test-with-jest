import User from '../user';

describe('User', () => {
  test('name return full name', () => {
    let userDetails = new User({ firstName: 'Madhusha', lastName: 'Prasad' });
    expect(userDetails.name).toBe('Madhusha Prasad');
  });
});
