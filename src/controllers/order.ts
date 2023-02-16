import { Request, Response } from 'express';

import Order from '../models/Order';
import OrderServices from '../services/order';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    OrderServices.createOrder(newOrder);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(404).json('Order cannot be created');
  }
};

export const updateOrderByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const orderId = req.params.id;
    const updateOrder = await OrderServices.updateOrderById(orderId, req.body);
    res.status(200).json(updateOrder);
  } catch (err) {
    res.status(404).json('Order not found');
  }
};

export const deleteOrderByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const orderId = req.params.id;
    const deleteOrder = await OrderServices.deleteOrderById(orderId);
    res.status(200).json({ deleteOrder });
  } catch (err) {
    res.status(404).json('Order not found by id');
  }
};

export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await OrderServices.getOrders();
    res.status(200).json({ orders });
  } catch (err) {
    res.status(404).json('Orders are not found');
  }
};
