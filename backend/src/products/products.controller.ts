import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common/dot/pagination.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService) { }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 })
    ]
  })) file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.productsService.findAll(paginationDto);
  }

  @Get(':filter')
  findByNameOrDescription(@Param('filter') filter) {

    return this.productsService.findByNameOrDescription(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Delete()
  deleteProducts() {
    return this.productsService.deleteProducts();
  }
}
