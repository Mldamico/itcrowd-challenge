import { IsString } from "class-validator";

export class CreateBrandDto {
  @IsString()
  name: string;

  @IsString()
  logo_url: string;
}
