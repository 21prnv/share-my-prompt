import { Metadata } from "next";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { getSession } from "next-auth/react";
export const metaData: Metadata = {
  title: "Share My Prompts",
  description: "Share your AI prompts easily",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
