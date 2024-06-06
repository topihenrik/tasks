import {db, NewUser, UserUpdate} from "./kysely";
import {sql} from "kysely";

async function findUserById(id: string) {
  return await db.selectFrom('user')
    .where('id', "=", id)
    .selectAll()
    .executeTakeFirst();
}

async function findUserByUsername(username: string) {
  return await db.selectFrom('user')
    .where('username', "=", username)
    .selectAll()
    .executeTakeFirst();
}

async function createUser(user: NewUser) {
  return await db.insertInto('user')
    .values({
      id: sql`${crypto.randomUUID()}::uuid`,
      username: user.username,
      password: user.password
    })
    .returningAll()
    .executeTakeFirstOrThrow();
}

async function updateUser(id: string, updateWith: UserUpdate) {
  await db.updateTable('user')
    .set(updateWith)
    .where('id', '=', id)
    .execute();
}


const User = {
  findUserById,
  findUserByUsername,
  createUser,
  updateUser
}

export default User;