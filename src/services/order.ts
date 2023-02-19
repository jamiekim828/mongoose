import Order, { OrderDocument } from '../models/Order';

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

const updateOrderById = async (
  id: string,
  update: Partial<OrderDocument>
): Promise<OrderDocument | null> => {
  return Order.findByIdAndUpdate(id, update, { new: true });
};

const deleteOrderById = async (id: string): Promise<OrderDocument | null> => {
  return Order.findByIdAndDelete(id);
};

const getOrders = async (): Promise<OrderDocument[]> => {
  return Order.find();
};

const getOrderByUserId = async (
  userIdFromRequest: string
): Promise<OrderDocument[]> => {
  return Order.find({ userId: userIdFromRequest });
};
export default { createOrder, updateOrderById, deleteOrderById, getOrders, getOrderByUserId };
