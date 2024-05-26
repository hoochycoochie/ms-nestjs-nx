import { BaseEntity, Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ name: 'first_name' })
  firstname: string;

  @Column({ name: 'last_name' })
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profilepicture: string;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
