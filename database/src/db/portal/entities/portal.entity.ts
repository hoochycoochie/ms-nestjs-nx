import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('tenants')
export class Tenant extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
