import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {}, {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized: async ({ req, token }) => {
      const pathname = req.nextUrl.pathname;
      if (!token && pathname.startsWith("/account")) return false;

      return true;
    },
  },
});
