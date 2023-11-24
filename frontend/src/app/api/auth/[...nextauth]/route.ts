import { dbConnect } from "@/app/lib/mongodb";
import { User, UserModel } from "@/app/models/user.model";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { RequestInternal } from "next-auth";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(
        credentials: Record<string, string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        if (!credentials) {
          return null;
        }

        const email = credentials.email;
        const password = credentials.password;

        try {
          await dbConnect();
          const user = await UserModel.findOne({ email });

          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
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
