"use client";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export default function SessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  sessionStorage.setItem("token", session?.userToken);

  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
}
