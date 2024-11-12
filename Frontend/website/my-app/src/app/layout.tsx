import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";


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
    <html lang="en">
      <body>
        {children}
        <footer>
        {/* <Footer/> */}
      </footer>
      </body>
    
    </html>
  );
}
