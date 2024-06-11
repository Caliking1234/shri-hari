import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Shri Hari Eye Care Centre",
  description:
    "Shri Hari Eye Care Hospital is a premier eye care facility dedicated to providing comprehensive and compassionate services to patients with various eye conditions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
