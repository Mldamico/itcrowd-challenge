import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { seedData } from './data/seed';
import { BrandsService } from 'src/brands/brands.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/auth/entities/auth.entity';
import { Repository } from 'typeorm';


@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService,
    private readonly brandsService: BrandsService,
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>
  ) { }


  async seed() {
    await this.deleteAll();
    await this.insertUsers();
    await this.insertNewProducts();
  }

  private async deleteAll() {
    await this.productService.deleteProducts();
    const queryBuilder = this.authRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
  }

  private async insertUsers() {
    const seedUsers = seedData.users;
    const users: Auth[] = [];

    seedUsers.forEach(user => {
      users.push(this.authRepository.create(user));
    });

    await this.authRepository.save(seedUsers);


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
