import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Roboto
const roboto = Roboto({
  variable: "--font-roboto", // Define a CSS variable for Roboto
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Super powerful next website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
