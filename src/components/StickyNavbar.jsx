import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  // Close mobile menu on large screens
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation links
  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" className="p-1 text-gray-200">
        <Link href="/">Home</Link>
      </Typography>
      <Typography as="li" className="p-1 text-gray-200">
        <Link href="/aboutus">About</Link>
      </Typography>
      <Typography as="li" className="p-1 text-gray-200">
        <Menu>
          <MenuHandler>
            <div className="flex items-center cursor-pointer">
            <Link href="/services">Services</Link>
              <svg
                className="h-4 w-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </MenuHandler>
          <MenuList className="bg-black border-gray-700 text-gray-200">
            <MenuItem className="hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800">
              Web Design
            </MenuItem>
            <MenuItem className="hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800">
             UI / UX Design
            </MenuItem>
            <MenuItem className="hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800">
             Web development
            </MenuItem>
            <MenuItem className="hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800">
             Graphic Design
            </MenuItem>
          </MenuList>
        </Menu>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-50 bg-black border-none px-4 py-2 lg:px-8"
      fullWidth
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logoupdated.png"
            width={150}
            height={50}
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu and Contact Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="outlined"
            className="hidden lg:block border-gray-500 text-gray-300 hover:bg-gray-800 rounded-full"
          >
            Contact Us
          </Button>

          {/* Mobile Menu Toggle */}
          <IconButton
            variant="text"
            className="lg:hidden text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse open={openNav} className="bg-black lg:hidden">
        {navList}
        <Button
          fullWidth
          variant="outlined"
          className="border-gray-500 text-gray-300 hover:bg-gray-800 rounded-full mt-2"
        >
          Contact Us
        </Button>
      </Collapse>
    </Navbar>
  );
}