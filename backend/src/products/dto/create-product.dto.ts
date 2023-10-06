import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  image_url?: string;

  @IsNumber()
  brandId: number;
}
