import { Router } from 'express';

import {
  createOrderController,
  deleteOrderByIdController,
  updateOrderByIdController,
} from '../controllers/order';

const router = Router();

router.post('/', createOrderController);
router.put('/:id', updateOrderByIdController);
router.delete('/:id', deleteOrderByIdController)

export default router;
