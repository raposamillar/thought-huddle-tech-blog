const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I just learned about this in class!',
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
