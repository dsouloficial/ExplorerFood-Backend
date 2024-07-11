const { Router } = require('express');
const multer = require('multer');

const DishesController = require('../controllers/DishesController');
const DishPictureController = require('../controllers/DishPictureController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ensureAdmin = require('../middlewares/ensureAdmin');
const uploadConfig = require('../configs/upload');

const dishesRoutes = Router();
const dishesController = new DishesController();
const dishPictureController = new DishPictureController();
const upload = multer(uploadConfig.MULTER);

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post('/', ensureAdmin, dishesController.create);
dishesRoutes.delete('/:id', ensureAdmin, dishesController.remove);
dishesRoutes.put('/:id', ensureAdmin, dishesController.update);
dishesRoutes.get('/:id', dishesController.show);
dishesRoutes.get('/', dishesController.index);

dishesRoutes.patch('/:id/picture',
  ensureAdmin,
  upload.single('picture'),
  dishPictureController.updatePicture
);

module.exports = dishesRoutes;
