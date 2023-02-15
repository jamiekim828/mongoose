import Product, { ProductDocument } from '../models/Product';

// product services here - logic to communicate with database
const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const getProductList =async () : Promise<ProductDocument[]> => {
    return Product.find()
}

export default {createProduct, getProductList}
