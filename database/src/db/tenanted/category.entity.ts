import { BaseEntity, Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  profilepicture: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
