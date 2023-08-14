class User {
  constructor(details) {
    const { firstName, lastName } = details;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

describe('User', () => {
  test('name return full name', () => {
    const user = new User({ firstName: 'Madhusha', lastName: 'Prasad' });
    expect(user.name).toBe('Madhusha Prasad');
  });
});
