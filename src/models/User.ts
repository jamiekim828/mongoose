// user model
import mongoose, { Document } from 'mongoose';
import ProductSchema from './Product';

export type UserDocument = Document & {
  date: Date;
  userId: string;
  productOrder: [];
  name: string;
  address: string[];
  phone: string;
  email: string;
};

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  date: {
    type: String,
    default: Date.now(),
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
  productOrder: {
    type: ProductSchema,
  },
  name: {
    type: String,
    required: true,
  },
  address: [{ type: String }],
  phone: { type: String },
  email: { type: String, unique: true },
});

export default mongoose.model<UserDocument>('User', UserSchema);
