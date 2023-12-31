import { Brand } from "./brand";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  brandId: number;
  brand?: Brand;
}

export interface CreateProduct {
  name: string;
  description: string;
  image_url: string;
  brandId: number;
}

export interface ProductResponse {
  products: Product[];
  totalCount: number;
}