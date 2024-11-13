import type { Metadata } from "next";

import SideNavBar from "@/components/sidebar/SideNavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-whiteblue h-[100vh] w-full">
      <div className="flex justify-between">
        <SideNavBar />
        {children}
      </div>
    </main>
  );
}
