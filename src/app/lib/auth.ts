import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import { openDb } from '@/app/lib/db';

export const authConfig = {
  theme: {
    colorScheme: "light"
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req ) {
        const db = await openDb();
        const userTable = db.table('user');
        let userFromDB = await userTable.where().findOne(); // username: credentials?.username

        if (!userFromDB?.username && credentials?.username === 'admin') {
          const salt = await bcrypt.genSalt(10);
          userFromDB = {
            username: credentials.username,
            name: 'Admin',
            email: 'none'
          }
          userFromDB.hash = await bcrypt.hash("admin", salt);

          console.log('###### LOGIN NEW ADMIN:', userFromDB);
          await userTable.save(userFromDB);
        }

        if (!userFromDB?.username) {
          return null;
        }

        const authed = await bcrypt.compareSync(credentials?.password, userFromDB?.hash)
        if (!authed) {
          return null
        }

        return userFromDB
      }
    })
  ],
}
