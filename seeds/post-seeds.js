const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    username: 'marktwain',
    date: 10/1/2022
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between authentication and authorization.  Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    username: 'sherlockholmes',
    date: 10/2/2022
  }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
