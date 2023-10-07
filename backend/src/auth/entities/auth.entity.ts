import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { unique: true })
  email: string;

  @Column('text', {
    select: false
  })
  password: string;
}
