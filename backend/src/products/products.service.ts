import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { PaginationDto } from 'src/common/dot/pagination.dto';
import { Brand } from 'src/brands/entities/brand.entity';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService');
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto) {

    try {
      const { ...productDetails } = createProductDto;
      const product = this.productRepository.create({
        ...productDetails,
        brand: { id: createProductDto.brandId }

      });
      await this.productRepository.save(product);
      return product;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 3, offset = 0, filter = '' } = paginationDto;
    const totalCount = await this.productRepository.count();
    const products = await this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        brand: true
      },
      where: [
        { name: Like(`%${filter}%`) },
        { description: Like(`%${filter}%`) }
      ]
    });
    return { products, totalCount };
  }

  async findByNameOrDescription(filter: string) {
    const data = await this.productRepository;

    return this.productRepository.find({
      where: [
        { name: Like(`${filter}%`) },
        { description: Like(`${filter}%`) }
      ]
    });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id }, relations: { brand: true } });
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id,
      ...updateProductDto,
    });

    if (!product) throw new NotFoundException('product not found');


    try {

      return this.productRepository.save(product);

    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException('something went wrong');
    }

  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('product not found');
    await this.productRepository.remove(product);

  }

  async deleteProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
    } catch (err) {
      throw new InternalServerErrorException('something went wrong');
    }
  }
}
