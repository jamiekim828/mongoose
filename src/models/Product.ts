// product model here
import mongoose, { Document } from 'mongoose';

export type ProductDocument = Document & {
  name: string;
};

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ProductDocument>('Product', ProductSchema);
