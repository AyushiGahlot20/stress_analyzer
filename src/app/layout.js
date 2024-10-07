import { Inter } from "next/font/google";
import "./globals.css";
import NavSidebar from "@/components/NavSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stress Analysis",
  description: "A Sleep Quality and Stress Analysis Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <NavSidebar />
        <>{children}</>
      </body>
    </html>
  );
}
