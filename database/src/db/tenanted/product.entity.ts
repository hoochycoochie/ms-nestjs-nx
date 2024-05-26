import { BaseEntity, Column, Entity, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { User } from './user.entity';

@Entity('products')
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  profilepicture: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
