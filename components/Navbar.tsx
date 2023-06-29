import React from "react";
import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";
import { AuthProviders, ProfileMenu } from "@/components";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={116} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        <ProfileMenu />
        {/* <AuthProviders /> */}
      </div>
    </nav>
  );
};

export default Navbar;
