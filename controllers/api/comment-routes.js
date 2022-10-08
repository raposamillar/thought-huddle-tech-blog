const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// router.get('/', (req, res) => {
//   Comment.findAll({
//     attributes: { exclude: ['password'] }
//     where
//   })
//     .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get('/:id', (req, res) => {
  Comment.findOne({
    attributes: {exclude: ['password'] },
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'comment_text',
      'user_id',
      'post_id',
      'created_at'
    ],
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'content', 'user_id', 'created_at'],
      }
      // {
      //   model: User,
      //   attributes: ['username']
      // }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
