const sequelize = require("sequelize");
const config = require("../config/config");
const Posts = require('../model/posts')

const connection = new sequelize(config);

Posts.init(connection);

module.exports = connection;