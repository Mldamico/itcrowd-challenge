import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo_url: string;

  @OneToMany(
    () => Product,
    (productBrand) => productBrand.brand,
    {
      cascade: true, onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  products?: Product[];
}
