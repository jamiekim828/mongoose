import Order, { OrderDocument } from '../models/Order';

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const updateOrderById = async (
  id: string,
  update: OrderDocument
): Promise<OrderDocument | null> => {
  return Order.findByIdAndUpdate(id, update);
};

export default { createOrder, updateOrderById };
