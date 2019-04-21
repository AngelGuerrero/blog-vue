var faker = require('faker')
var Sequelize = require('sequelize')
var models = require('../models/index')
var User = models.User
var Post = models.Post
var Tag = models.Tag

async function seeds() {
  let num_post = 100;

  // Posts
  let user;
  for (let i = 0; i < num_post; i++) {
    try {
      user = await User.findByPk(Math.floor(Math.random() * 10) + 1)

      if (!user) console.log('User not found')

    } catch (e) {
      console.log(`Unexpected error occurred searching user: ${e}`)
    }

    try {
      const post = await Post.create({
        title: faker.lorem.word(),
        content: faker.lorem.sentence(),
        UserId: user.id,
        tags: [{
          name: faker.lorem.slug()
        }]
      }, {
        include: [{
          model: Tag,
          as: 'tags'
        }]
      })

      if (!post) console.log('Error creating post')

    } catch (e) {
      console.log(`Unexpected error occurred creating post: ${e}`)
    }
  }
  process.exit(0);
}

seeds()