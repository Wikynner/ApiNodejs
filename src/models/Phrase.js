const { Model, DataTypes } = require('sequelize');
const { Mysql, sequelize } = require('../instances/pg');


const Phrase = sequelize.define('Phrase', {
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
  },
}, {
  tableName: 'Phrases',
  timestamps: false
});

module.exports = Phrase;
