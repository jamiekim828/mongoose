// logic to deal with request and response here
import { Request, Response } from 'express';

import Product from '../models/Product';
import ProductServices from '../services/products';

export const createProductController = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({ name: req.body.name });
    const product = await ProductServices.createProduct(newProduct);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json('Not found');
  }
};

export const getProductListController = async (req: Request, res: Response) => {
  try {
    const productList = await ProductServices.getProductList();
    res.status(200).json(productList);
  } catch (err) {
    res.status(404).json('Products not found');
  }
};

export const deleteProductByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const productId = req.params.id;
    const deleteProduct = await ProductServices.deleteProductById(productId)
    res.status(200).json(deleteProduct)
  } catch (err) {
    res.status(404).json('No product by this id');
  }
};

export const updateProductByIdController =async (req: Request, res: Response) => {
    try {
        const productId = req.params.id
        const updateProduct = await ProductServices.updateProductById(productId, req.body)
        res.status(200).json(updateProduct)
        
    } catch(err){res.status(404).json('Cannot find the product by this id')}
    
}
