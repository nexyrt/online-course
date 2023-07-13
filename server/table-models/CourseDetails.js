import { Sequelize } from "sequelize";
import db from "../Database.js";

const {DataTypes} = Sequelize;

const Course = db.define('course_details', {
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    course_name: DataTypes.STRING,
    course_description: DataTypes.STRING,
    course_jp: DataTypes.INTEGER
}, {
    freezeTableName:true
});


export default Course;

(async()=>{
    await db.sync();
})();