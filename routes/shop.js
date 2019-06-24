const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const isAuth = require('../middlewares/isAuth');

router.get('/:rollNo', isAuth, shopController.getUserHomePage);

router.get('/:rollNo/sell', isAuth, shopController.getSellProduct);

router.post('/:rollNo/sell', isAuth, shopController.postSellProduct);

module.exports = router;