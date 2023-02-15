import mongoose, { Document } from 'mongoose';

export type OrderDocument = Document & {
  name: string;
  quantity: number;
  price: number;
};

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

export default mongoose.model<OrderDocument>('Order', OrderSchema);
