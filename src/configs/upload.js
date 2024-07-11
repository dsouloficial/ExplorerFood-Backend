const path = require('path');
const multer = require('multer')
const crypto = require('crypto')

const UPLOAD_FOLDER = path.resolve(__dirname, '..', '..', 'uploads');
const TMP_FOLDER = path.resolve(UPLOAD_FOLDER, 'tmp');

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};

module.exports = {
  TMP_FOLDER,
  UPLOAD_FOLDER,
  MULTER
};
