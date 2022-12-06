// 시퀄라이즈 모델 불러옴
const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// js 파일만 확장자 안써줘도 됨
db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

module.exports = db;