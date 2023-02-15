import { Router } from 'express';

import {
  createOrderController,
  updateOrderByIdController,
} from '../controllers/order';

const router = Router();

router.post('/', createOrderController);
router.put('/:id', updateOrderByIdController);

export default router;
