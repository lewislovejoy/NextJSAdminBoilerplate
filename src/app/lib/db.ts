// @ts-ignore
import {OkeyDB} from 'okeydb';

const db = new OkeyDB();
const userTable = db.table('user');

export async function openDb () {
  return db;
}
