import { Sequelize } from "sequelize";

const db = new Sequelize('course','root','mnbvcxz123#@!',{
  host: 'localhost',
  dialect: 'mysql'
});

export default db;