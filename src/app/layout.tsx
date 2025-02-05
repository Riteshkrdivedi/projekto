import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
// import { ContextProvider } from "../context/Context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/layout/Footer";
import NavbarWrapper from "@/components/layout/NavbarWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projekto",
  description: "A platform where developers can collaborate on projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] text-white overflow-y-scroll overflow-x-hidden}`}
      >
        <AuthProvider>
          <UserProvider>
            <NavbarWrapper />

            {children}
            <Footer />
            <ToastContainer position="top-right" theme="dark" />
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
