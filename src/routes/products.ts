// product router here
import { Router } from "express";

import { createProductController, deleteProductByIdController, getProductListController } from "../controllers/products";

const router = Router()

router.post('/', createProductController)
router.get('/', getProductListController)
router.delete('/:id', deleteProductByIdController)

export default router