import { Router } from "express";

import { createUserController, deleteUserById, getUserByIdController, getUsersController, updateUserByIdController } from "../controllers/user";

const router = Router()

router.post('/', createUserController)
router.get('/', getUsersController)
router.get('/:id', getUserByIdController)
router.put('/:id', updateUserByIdController)
router.delete('/:id', deleteUserById)

export default router