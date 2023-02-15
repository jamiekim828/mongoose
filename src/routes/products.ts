// product router here
import { Router } from "express";

import { createProductController, deleteProductByIdController, getProductListController, updateProductByIdController } from "../controllers/products";

const router = Router()

router.post('/', createProductController)
router.get('/', getProductListController)
router.delete('/:id', deleteProductByIdController)
router.put('/:id', updateProductByIdController)

export default router