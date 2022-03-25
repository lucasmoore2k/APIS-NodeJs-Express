import express from 'express';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.post('/info', productController.createProductInfo)
router.put('/info', productController.updateProductInfo)
router.get('/info/:id', productController.getProductInfo)
router.post('/info/createReview', productController.createReview);
router.delete('/info/:id/reviews/:index', productController.deleteReview);
router.get('/info', productController.findAll)
router.delete('/info/:id', productController.deleteProductInfo)

export default router;