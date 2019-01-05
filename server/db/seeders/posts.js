var faker = require('faker')
var Sequelize = require('sequelize')
var models = require('../models/index')
var User = models.User
var Post = models.Post
var Tag = models.Tag

async function seeds() {
  let num_post = 20;
  let max_users = 0;
  
  await User.findAndCountAll()
            .then(res => max_users = res.count)
            .catch(err => console.log(`${err}`))

  // Posts
  let user;
  for (let i = 0; i < num_post; i++) {
    // Find the user
    try {
      user = await User.findByPk(Math.floor(Math.random() * max_users) + 1)

      if (!user) throw "User not found"

    } catch (e) {
      console.log(`Unexpected error occurred searching user: ${e}`)
    }

    // Create the post
    try {
      let tags = [];
      let random = Math.floor(Math.random() * max_users) + 1;
      
      for (let i = 0; i < random; i++) {
        tags.push({ name: faker.lorem.slug() })
      }
      
      const post = await Post.create({
        title: faker.lorem.word(),
        content: faker.lorem.paragraphs(),
        UserId: user.id,
        tags: tags
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