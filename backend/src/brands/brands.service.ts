import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private readonly brandRepository: Repository<Brand>,
  ) { }

  async create(createBrandDto: CreateBrandDto) {
    const brand = await this.brandRepository.create(createBrandDto);
    await this.brandRepository.save(brand);
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    const product = await this.brandRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('brand not found');
    return product;
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {

    const brand = await this.brandRepository.preload({
      id,
      ...updateBrandDto,

    });

    if (!brand) throw new NotFoundException('brand not found');

    try {
      return this.brandRepository.save(brand);

    } catch (err) {

      throw new InternalServerErrorException('something went wrong');
    }
  }

  async remove(id: number) {
    const brand = await this.brandRepository.findOneBy({ id });
    if (!brand) throw new NotFoundException('brand not found');
    await this.brandRepository.remove(brand);
  }
}
