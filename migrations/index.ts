import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { CreateStoragePermission1701317000000 } from './1701317000000-CreateStoragePermission';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +(process.env.PG_PORT || 5432),
  entities: [],
  migrations: [CreateStoragePermission1701317000000],
});
