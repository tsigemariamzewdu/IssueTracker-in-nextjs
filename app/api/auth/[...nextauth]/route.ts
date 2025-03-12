import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions :NextAuthOptions= {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Ensure JWT-based session handling
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

// ✅ Export handlers correctly for Next.js API routes
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
