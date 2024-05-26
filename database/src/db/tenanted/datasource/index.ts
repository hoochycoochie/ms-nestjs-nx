import { DataSource } from 'typeorm';

export const TenantedDataSource = new DataSource({
  type: 'postgres',
});
