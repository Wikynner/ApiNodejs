const { Model, DataTypes } = require('sequelize');
const { Mysql } = require('../instances/pg');

const Phrase = Mysql.define('Phrase', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  author: {
    type: DataTypes.STRING
  },
  txt: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'phrases',
  timestamps: false
});

module.exports = Phrase;
