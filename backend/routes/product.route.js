import express from 'express';
import {
  deleteProduct,
  getProducts,
  postProduct,
  putProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct);

export default router;
