var express = require('express');

var router = express.Router();
const userImagesController =
  require('../../controllers/index').userImagesController;
const routes = require('../../utils/routes-values').USER_IMAGES_ROUTS;
const asyncMiddleware = require('../../utils/error-catcher').asyncMiddleware;
const authMiddleware = require('../../utils/error-catcher').authMiddleware;

router.post(
  routes.BASE_URL,
  authMiddleware(),
  asyncMiddleware(async (req, res, next) => {
    await userImagesController.addNewImage(req, res, next);
  }),
);

router.get(
  routes.BASE_URL,
  authMiddleware(),
  asyncMiddleware(async (req, res, next) => {
    await userImagesController.getUserImages(req, res, next);
  }),
);

router.get(
  routes.WITH_ID,
  authMiddleware(),
  asyncMiddleware(async (req, res, next) => {
    await userImagesController.getUserImage(req, res, next);
  }),
);
router.put(
  routes.BASE_URL,
  authMiddleware(),
  asyncMiddleware(async (req, res, next) => {
    await userImagesController.updateUserImage(req, res, next);
  }),
);

module.exports = router;
