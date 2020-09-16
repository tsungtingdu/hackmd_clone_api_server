'use strict';
const bcrypt = require('bcryptjs')
const db = require('../models')
const { Collaborator, Post, User } = db
const faker = require('faker')

const SEED_USER = [
  {
    name: 'root',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'user1',
    email: 'user1@gmail.com',
    password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'user2',
    email: 'user2@gmail.com',
    password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'user3',
    email: 'user3@gmail.com',
    password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
const ROLE = ['viewer', 'collaborator']

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create users
    await queryInterface.bulkInsert('Users', SEED_USER, {})

    // create posts
    let date = new Date()
    await queryInterface.bulkInsert('Posts',
      Array.from({ length: 50 }).map((item, index) => {
        let fakeTitle = faker.lorem.words(3)
        return {
          title: fakeTitle,
          content: `# ${fakeTitle} \n\ ${faker.lorem.sentences()}`,
          status: 'private',
          createdAt: date,
          updatedAt: date
        }
      }), {})

    // get user id
    let users = await User.findAll()
    users = users.filter(i => i.role === 'user').map(i => i.id)
    // get post id
    let posts = await Post.findAll()
    posts = posts.map(i => i.id)

    // create owner
    await queryInterface.bulkInsert('Collaborators',
      Array.from({ length: posts.length }).map((item, index) => {
        return {
          PostId: posts[index],
          UserId: users[Math.floor(Math.random() * (users.length))],
          role: 'owner',
          createdAt: date,
          updatedAt: date
        }
      }), {})

    // create viewer and collaborator
    return queryInterface.bulkInsert('Collaborators',
      Array.from({ length: posts.length }).map((item, index) => {
        return {
          PostId: posts[index],
          UserId: users[Math.floor(Math.random() * (users.length))],
          role: ROLE[Math.floor(Math.random() * (ROLE.length))],
          createdAt: date,
          updatedAt: date
        }
      }), {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {})
      .then(() => queryInterface.bulkDelete('Users', null, {})
        .then(() => queryInterface.bulkDelete('Collaborators', null, {})))
  }
};
