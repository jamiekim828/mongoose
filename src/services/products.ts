import { trusted } from 'mongoose';
import Product, { ProductDocument } from '../models/Product';

// product services here - logic to communicate with database
const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const getProductList = async (): Promise<ProductDocument[]> => {
  return Product.find();
};

const deleteProductById = async (
  id: string
): Promise<ProductDocument | null> => {
  return Product.findByIdAndDelete(id);
};

const updateProductById = async (
  id: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  return Product.findByIdAndUpdate(id, update, {new: true});
};

export default {
  createProduct,
  getProductList,
  deleteProductById,
  updateProductById,
};
