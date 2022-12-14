// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// User.associate = models => {
//   User.hasMany(models.Post, {
//     foreignKey: 'id',
//     sourceKey: 'user_id',
//     onDelete: 'CASCADE'
//   });
// };

// User.belongsToMany(Post, {
//   foreignKey: 'user_id',
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id'
// });



module.exports = { User, Post, Comment };
