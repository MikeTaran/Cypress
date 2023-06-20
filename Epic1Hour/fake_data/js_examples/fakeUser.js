const { faker } = require("@faker-js/faker");

function generateFakeUser() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    about: faker.lorem.sentence(),
    job: faker.person.jobTitle(),
    company: faker.company.name(),
    address: {
      avatar: faker.internet.avatar(),
      country: faker.location.country(),
      city: faker.location.city(),
      street: faker.location.street(),
      zipCode: faker.location.zipCode(),
    },
  };
}

for (let i = 0; i <= 5; i++) {
  console.log(generateFakeUser());
}
