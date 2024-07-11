const { Router } = require('express');

const CategoriesController = require('../controllers/CategoriesController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ensureAdmin = require('../middlewares/ensureAdmin');

const categoriesRoutes = Router();
const categoriesController = new CategoriesController();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.get('/', categoriesController.index);
categoriesRoutes.post('/', ensureAdmin, categoriesController.create);
categoriesRoutes.delete('/:id', ensureAdmin, categoriesController.delete);

module.exports = categoriesRoutes;
