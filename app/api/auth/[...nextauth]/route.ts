import User from "@models/user";
import { connectToDB } from "@utils/database";
import { NextApiHandler } from "next";
import NextAuth, { Profile } from "next-auth";
import Google from "next-auth/providers/google";

interface GoogleProfile extends Profile {
  picture?: string;
}
const handler: NextApiHandler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "default-client-id",
      clientSecret: process.env.GOOGLE_SECRET_KEY || "default-secret-key",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile, account }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({
          email: (profile as GoogleProfile)?.email,
        });

        if (!userExists) {
          console.log(profile);

          await User.create({
            email: (profile as GoogleProfile)?.email,
            username: (profile as GoogleProfile)?.name
              ?.replace(" ", "")
              .toLowerCase(),
            image: (profile as GoogleProfile)?.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session, token, user }) {
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });
      session.user.id = sessionUser._id.toString();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
