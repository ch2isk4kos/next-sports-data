"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const GlobalNavbar = () => {
  const path = usePathname();
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          SPORTS
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          {/* <CustomLink href="/cfb" title="CFB" className="mr-4" /> */}
          <Link
            href="/cfb"
            className={path === "/cfb" ? "text-blue-600 font-bold" : ""}
          >
            CFB
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* <CustomLink href="/nfl" title="NFL" className="mr-4" /> */}
          <Link
            href="/nfl"
            className={path === "/nfl" ? "text-blue-600 font-bold" : ""}
          >
            NFL
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* <CustomLink href="/nba" title="NBA" className="mr-4" /> */}
          <Link
            href="/nba"
            className={path === "/nba" ? "text-blue-600 font-bold" : ""}
          >
            NBA
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* <CustomLink href="/mlb" title="MLB" className="mr-4" /> */}
          <Link
            href="/mlb"
            className={path === "/mlb" ? "text-blue-600 font-bold" : ""}
          >
            MLB
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* <CustomLink href="/mlb" title="MLB" className="mr-4" /> */}
          {/* <CustomLink href="/nhl" title="NHL" /> */}
          <Link
            href="/nhl2"
            className={path === "/nhl2" ? "text-blue-600 font-bold" : ""}
          >
            NHL2
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default GlobalNavbar;
