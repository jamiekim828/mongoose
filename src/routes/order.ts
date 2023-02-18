import { Router } from 'express';

import {
  createOrderController,
  deleteOrderByIdController,
  getOrdersController,
  updateOrderByIdController,
} from '../controllers/order';

const router = Router();

router.post('/:userId', createOrderController);
router.put('/:id', updateOrderByIdController);
router.delete('/:id', deleteOrderByIdController)
router.get('/', getOrdersController)

export default router;
