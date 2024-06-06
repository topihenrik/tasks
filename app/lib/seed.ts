import { sql } from 'kysely'
import { db } from "./kysely";

export async function seed() {
  const createTable = await db.schema.createTable("user")
    .ifNotExists()
    .addColumn('id', 'uuid', (cb) => cb.primaryKey())
    .addColumn("username", "varchar", (cb) => cb.notNull().unique())
    .addColumn("password", "varchar", (cb) => cb.notNull())
    .addColumn('created_at', 'timestamp', (cb) =>
      cb.notNull().defaultTo(sql`now()`)
    )
    .execute();
  return {
    createTable
  }
}