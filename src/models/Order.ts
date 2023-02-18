import mongoose, { Document } from 'mongoose';

import User from './User';
import ProductSchema from './Product';

export type OrderDocument = Document & {
  date: Date;
  userId: string;
  productOrder: [];
};

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  productOrder: [{ type: { ProductSchema } }],
});

export default mongoose.model<OrderDocument>('Order', OrderSchema);
