"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Session } from "next-auth";

const Provider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
