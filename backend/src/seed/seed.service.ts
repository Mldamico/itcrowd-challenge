import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { seedData } from './data/seed';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService,
    private readonly brandsService: BrandsService
  ) { }


  async seed() {
    await this.insertNewProducts();
  }

  private async insertNewProducts() {
    await this.productService.deleteProducts();
    const seedBrands = seedData.brands;
    const insertBrands = [];
    seedBrands.forEach(brand => {
      insertBrands.push(this.brandsService.create(brand));
    });
    await Promise.all(insertBrands);
    const seedProducts = seedData.products;
    const insertProducts = [];
    seedProducts.forEach(product => {
      insertProducts.push(this.productService.create(product));
    });
    return true;
  }
}
