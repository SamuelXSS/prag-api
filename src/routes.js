const express = require('express');
const UserController = require('./controllers/UserController');
const FarmController = require('./controllers/FarmController');
const AreaController = require('./controllers/AreaController');
const PragueController = require('./controllers/PragueController');
const PesticideController = require('./controllers/PesticideController');
const AuthController = require('./controllers/AuthController');

const routes  = express.Router();
require('dotenv').config()
const version = process.env.APP_VERSION

//USERS OK
routes.get(version  + '/users', UserController.index)
routes.post(version + '/users', UserController.store)

//AUTH ... 
routes.post(version + '/auth', AuthController.store)

//PESTICIDES OK
routes.get(version  + '/pesticides', PesticideController.indexAll)
routes.get(version  + '/pragues/:prague_id/pesticides', PesticideController.index)
routes.post(version + '/pragues/:prague_id/pesticides', PesticideController.store)

//PRAGUES OK
routes.get(version  + '/pragues', PragueController.indexAll)
routes.get(version  + '/pesticides/:pesticide_id/pragues', PragueController.index)
routes.post(version + '/pesticides/:pesticide_id/pragues', PragueController.store)

//FARMS OK
routes.get(version  + '/users/:user_id/farms', FarmController.index)
routes.post(version + '/users/:user_id/farms', FarmController.store)

//AREAS OK
routes.get(version  + '/farms/:farm_id/areas', AreaController.index);
routes.post(version + '/farms/:farm_id/areas', AreaController.store);

module.exports = routes;