import React, { Suspense } from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/"> Home (Host) </Link>
    <Link href="/remote1"> Remote 1 (NextJS) </Link>
    <Link href="/remote2"> Remote 2 (NextJS) </Link>
    <Link href="/remote3"> Remote 3 (React) </Link>
  </nav>
);

export default Nav;
