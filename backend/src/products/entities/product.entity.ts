import { Brand } from "src/brands/entities/brand.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image_url?: string;

  @Column()
  price: number;

  @ManyToOne(
    () => Brand,
    (brand) => brand.products,


  )
  brand: Brand;

}
