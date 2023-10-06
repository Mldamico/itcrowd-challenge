interface BrandSeed {
  id: number;
  name: string;
  logo_url: string;
}
interface ProductSeed {
  name: string;
  description: string;
  price: number;
  image_url: string;
  brandId: number;
}

interface SeedData {
  brands: BrandSeed[];
  products: ProductSeed[];
}

export const seedData: SeedData = {
  brands: [
    { id: 1, name: "Coca", logo_url: '' },
    { id: 2, name: "Pepsi", logo_url: '' }
  ],
  products: [
    {
      name: 'string',
      description: 'string',
      price: 200,
      image_url: 'string',
      brandId: 1
    }
  ]
};
