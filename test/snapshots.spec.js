const user = {
  name: "Madhusha Prasad",
  age: 25,
  job: "Software Engineer",
  address: {
    city: "Colombo",
    country: "Sri Lanka",
  },
};

test("User matches the snapshot", () => {
    const userString = `{
                "name": "Madhusha Prasad",
                "age": 25,
                "job": "Software Engineer",
                "address": {
                        "city": "Colombo",
                        "country": "Sri Lanka"
                }
        }`;

    expect(JSON.stringify(user)).toMatchSnapshot(userString);
});
