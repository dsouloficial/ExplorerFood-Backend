const knex = require("../database/knex");
const DiskStorage = require('../providers/DiskStorage');

class DishPictureController {
  async updatePicture(request, response) {
    const { id } = request.params;
    const pictureFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const dish = await knex('dishes').where({ id }).first();
    if (!dish) throw new AppError('Prato não encontrado', 404);

    if (dish.picture)
      await diskStorage.deleteFile(dish.picture);

    const filename = await diskStorage.saveFile(pictureFilename);
    dish.picture = filename;

    await knex('dishes').where({ id }).update(dish);

    return response.json({ picture: filename });
  }
}

module.exports = DishPictureController;
