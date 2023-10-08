
import { CreateProduct, Product, ProductResponse } from "../interfaces/products";
import axios from "./axios";

const getProducts = (offset = 0, limit = 3, filter = '') => axios.get<ProductResponse>(`/products?offset=${offset}&limit=${limit}&filter=${filter}`);

const getProductById = (id: number) => axios.get<Product>(`/products/${id}`);

const deleteProductsById = (id: number, token: string) => axios.delete(`/products/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const createProduct = (product: CreateProduct, token: string) => axios.post("/products", product,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


const uploadProductImage = (image: FormData) => axios.post("/products/upload", image);

const updateProduct = (id: number, product: CreateProduct, token: string) => axios.patch(`/products/${id}`, product, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


export {
  getProducts,
  getProductById,
  deleteProductsById,
  createProduct,
  uploadProductImage,
  updateProduct
};
