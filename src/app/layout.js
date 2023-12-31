import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import TimeLine from "@/components/TimeLine";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Surendra Singh Kamboj",
  description:
    "Welcome to the digital showcase of a versatile Full Stack Web Developer! Explore a curated collection of web projects, innovative designs, and cutting-edge technologies. Discover my passion for crafting seamless user experiences and building robust web applications. Let's connect and discuss how I can bring your digital ideas to life.",
  monetag:"532f8fc8fe11763df80b74528b91551d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TimeLine />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
