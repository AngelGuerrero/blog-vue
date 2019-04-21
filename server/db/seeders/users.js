var faker = require('faker')
var Sequelize = require('sequelize')
var models = require('../models/index')
var User = models.User

async function seeds() {
  let num_users = 10;

  // Users
  for (let i = 0; i < num_users; i++) {
    try {
      const user = await User.create({
        name: faker.name.findName(),
        email: faker.internet.email()
      })

      if (!user) console.log('Error creating user')

    } catch (e) {
      console.log(`Unexpected error occurred searching user: ${e}`)
    }
  }
  process.exit(0);
}

seeds()