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
    const productList = await ProductServices.getProductList()
    res.status(200).json(productList)
  } catch (err) {
    res.status(404).json('Products not found')
  }
};
