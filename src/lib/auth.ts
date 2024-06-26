import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Fetch } from "./actions/fetch";

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
  authorization: {
    params: {
      scope:
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    },
  },
});

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "email", type: "email" },
    password: { label: "password", type: "password" },
  },
  async authorize(credentials: any) {
    try {
      const data = await Fetch("auth/login/password", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      if (data && data.user) {
        return { ...data.user, userToken: data.token };
      }
    } catch (error) {
      return null;
    }
    return null;
  },
});

const providers = [googleProvider, credentialsProvider];

const callbacks = {
  async jwt({ token, user, trigger, session }: any) {
    if (user) {
      const data = await Fetch("auth/callback", {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          displayName: user.name,
          image: user.image,
        }),
      });
      token._id = data.user._id;
      token.userToken = data.token;
    }
    if (trigger === "update" && session?.name && session?.image) {
      token.name = session.name;
      token.image = session.image;
    }
    return token;
  },
  async session({ session, token, trigger, newSession }: any) {
    if (token.userToken) {
      session.userToken = token.userToken;
    }
    if (token._id) {
      session.user = { ...session.user, _id: token._id };
    }
    if (trigger === "update" && newSession?.name && newSession?.image) {
      session.user.name = newSession.name;
      session.user.image = newSession.image;
    }
    return session;
  },
};

const events = {
  async signOut({ token, session }: any) {
    try {
      const res = await Fetch("auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.userToken}`,
        },
      });
      if (res.ok) {
        token.userToken = null;
        session.userToken = null;
      } else {
        console.log("Failed to sign out");
      }
    } catch (error) {
      console.error("Sign out error:", error);
    }
  },
};

export const pages = {
  signIn: "/login",
};

export const AuthOptions = {
  providers,
  callbacks,
  events,
  pages,
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

export const getCurrentSession = async () =>
  await getServerSession(AuthOptions);
