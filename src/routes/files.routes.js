const { Router, static } = require('express');

const filesRoutes = Router();

const uploadConfig = require('../configs/upload');

filesRoutes.use('/', static(uploadConfig.UPLOAD_FOLDER));

module.exports = filesRoutes;
