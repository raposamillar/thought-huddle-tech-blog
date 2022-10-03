const { User } = require('../models');

const userdata = [
  {
    username: 'marktwain',
    password: 'password321'
  },
  {
    username: 'sherlockholmes',
    password: 'password321'
  },
  {
    username: 'dracula',
    password: 'password321'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
