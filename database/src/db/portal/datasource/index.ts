import { DataSource } from 'typeorm';

export const PortalDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'portal',
  entities: ['../entities/*.entity.{ts,js}'],
  migrations: ['../migrations/**/*.{ts,js}'],
  synchronize: false,
});
