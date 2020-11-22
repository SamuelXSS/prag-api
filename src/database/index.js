const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Farm = require('../models/Farm');
const Area = require('../models/Area');
const Pesticide = require('../models/Pesticide');
const Prague = require('../models/Prague');
const Report = require('../models/Report')

const connection = new Sequelize(dbConfig);

User.init(connection)
Farm.init(connection)
Area.init(connection)
Pesticide.init(connection)
Prague.init(connection)
Report.init(connection)

User.associate(connection.models)
Farm.associate(connection.models)
Area.associate(connection.models)
Pesticide.associate(connection.models)
Prague.associate(connection.models)
Report.associate(connection.models)

module.exports = connection;