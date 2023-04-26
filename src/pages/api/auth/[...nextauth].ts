import { JWT } from 'next-auth/jwt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials: SignupInputs) {
        const user: User = {
          id: '123',
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          username: credentials.username,
          email: credentials.email,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }: { token: JWT; user: User }) {
      token = user;

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
