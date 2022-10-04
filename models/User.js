const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create the User model
class User extends Model {
  // set up a method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns and configuration options
User.init(
{
  // define an id column
  id: {
    // type of data is determined by using the Sequelize DataTypes object
    type: DataTypes.INTEGER,
    // same as SQL `NOT NULL`
    allowNull: false,
    primaryKey: true,
    // turn on auto increment
    autoIncrement: true 
  },
  // define a username column
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // define a password column
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      // the password must be minimally four characters long
      len: [4]
    }
  }
},
{
  hooks: {
    // set up beforeCreate lifecycle "hook" functionality
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },

    async beforeUpdate(updatedUserData) {
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      return updatedUserData;
    }
  },  
  // pass in the imported sequelize connection (the direct connection to the database)
  sequelize,
  // refrain from automatically creating createdAt/updatedAt timestamp fields
  timestamps: false,
  // don't pluralize the name of the database table
  freezeTableName: true,
  // use underscores instead of camel-casing
  underscored: true,
  // enable the model name to remain lowercase in the database
  modelName: 'user'
},
);

module.exports = User;
