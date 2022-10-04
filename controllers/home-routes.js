const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('==================');
  Post.findAll({
    include:User,
    include:Comment
  })
  .then(db)
})