const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const isAuth = require('../middlewares/isAuth');

router.get('/:rollNo', isAuth, shopController.getUserHomePage);

router.get('/:rollNo/sell', isAuth, shopController.getSellProduct);

router.post('/:rollNo/sell', isAuth, shopController.postSellProduct);

router.get('/:rollNo/notifications', isAuth, shopController.getNotifications);

router.get('/:rollNo/product/:product_id', isAuth, shopController.getProductDetailPage);

router.get('/:rollNo/user/:anotherUserRollNo', isAuth, shopController.getAnotherUserProfile);

router.delete('/:rollNo/product/:product_id/notify-seller', isAuth, shopController.deleteNotifySeller);

module.exports = router;