const HSC = require('http-status-codes');
const imagesService = require('../../services/index').imagesService;

module.exports = {
  async addNewImage(req, res) {
    return res.json(await imagesService.create(req));
  },
  async getUserImages(req, res, next) {
    const result = await imagesService.getByUserId(req);

    if (result.count === 0) return next();

    return res.json({
      meta: { count: result.count },
      data: { rows: result.rows },
    });
  },
  async getUserImage(req, res, next) {
    const result = await imagesService.getOneByIdAndUserId(req);

    if (!result) return next();

    return res.json(result);
  },
  async updateUserImage(req, res) {
    const result = await imagesService.updateByIdAndUserId(req);

    if (result === 1) return res.sendStatus(HSC.OK);

    return res.sendStatus(HSC.BAD_REQUEST);
  },
  async deleteUserImage(req, res) {
    const result = await imagesService.deleteByIdAndUserId(req);

    if (result === 1) return res.sendStatus(HSC.OK);

    return res.sendStatus(HSC.BAD_REQUEST);
  },
};
