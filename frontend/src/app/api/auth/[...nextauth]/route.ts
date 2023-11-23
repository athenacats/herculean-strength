import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const user = { id: "1" };
        return user;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
} as import("next-auth").NextAuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
