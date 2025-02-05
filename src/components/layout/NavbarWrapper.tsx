"use client"; // Mark as Client Component

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // List pages where Navbar should be hidden
  const noNavbarRoutes = ["/resources"];

  if (noNavbarRoutes.includes(pathname)) return null;

  return <Navbar />;
};

export default NavbarWrapper;
