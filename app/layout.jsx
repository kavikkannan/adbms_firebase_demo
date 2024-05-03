import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common_header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A BASIC FUNC",
  description: "a website with basic firebase functions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div>
          <Header/>
        </div>
        {children}
        </body>
    </html>
  );
}
