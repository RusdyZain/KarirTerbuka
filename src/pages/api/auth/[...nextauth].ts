import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';


const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        phonenumber: { label: 'Nomor Telepon', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const { email, password, phonenumber } = credentials as {
          phonenumber: string;
          email: string;
          password: string;
        };
        const user = {
          id: 'id',
          email: email,
          password: password,
          phonenumber: phonenumber,
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === 'credentials' && user) {
        const userWithPhonenumber = user as unknown as {
          phonenumber: string;
          email: string;
        };
        token.email = userWithPhonenumber.email;
        token.phonenumber = userWithPhonenumber.phonenumber;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        if (token?.email) {
          session.user.email = token.email;
        }
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
