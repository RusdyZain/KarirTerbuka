import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_ID as string,
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
      if (account?.provider === 'google' && user) {
        const userData = {
          id: parseInt(user.id).toString(),
          email: user.email ?? '',
          name: user.name,
          image: user.image,
        };
        console.log(userData);
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: userData.email },
          });
          if(!existingUser) {
            await prisma.user.create({
              data: {
                email: userData.email,
                googleId: userData.id,
                googleEmail: userData.email,
                googleName: userData.name,
                googlePicture: userData.image,
                password: '',
              }
            })
          }
          console.log(userData);

        } catch (error) {
          console.error('tidak bisa menambahkan akun google', error);
        }
        token.id = userData.id;
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
