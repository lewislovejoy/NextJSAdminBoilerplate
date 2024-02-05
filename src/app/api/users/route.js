import { getServerSession } from 'next-auth';

import { authConfig } from '../../lib/auth';
import { openDb } from '../../lib/db';

export async function GET(request) {
  const session = await getServerSession(authConfig);

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  const db = await openDb();
  const userTable = db.table('user');

  if (!id) {
    const allUsers = await userTable.where().find(); // username: credentials?.username
    return Response.json({ success: true, data: allUsers })
  }

  return Response.json({ success: true, test: '2345' })
}
