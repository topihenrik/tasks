import {
  Kysely,
  PostgresDialect,
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable
} from 'kysely'
import { Pool } from 'pg'
export interface Database {
  user: UserTable;
}
export interface UserTable {
  id: Generated<string>;
  username: string;
  password: string;
  created_at: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'postgres',
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    max: 10,
  })
})

export const db = new Kysely<Database>({
  dialect,
})
