import React from "react";
import Image from "next/image";
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

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "About"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          className="p-1 font-normal text-gray-200"
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
      <Typography as="li" variant="small" className="p-1 font-normal text-gray-200">
        <Menu>
          <MenuHandler>
            <div className="flex items-center cursor-pointer">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4 ml-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </MenuHandler>
          <MenuList>
            {["Service 1", "Service 2", "Service 3"].map((service) => (
              <MenuItem key={service}>{service}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8 lg:py-2 bg-black border-none">
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center justify-between text-white w-full">
            <a href="#" className="mr-4 cursor-pointer py-1">
              <Image src="/images/full-logo.png" width={150} height={50} alt="Logo" className="h-8 w-auto" />
            </a>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <Button
                variant="outlined"
                size="lg"
                className="hidden lg:inline-block rounded-full border border-gray-500 bg-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 px-8 py-2 normal-case text-base font-normal"
              >
                Contact Us
              </Button>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>
        <Collapse open={openNav} className="bg-heroBackground">
          {navList}
          <Button
            fullWidth
            variant="outlined"
            size="lg"
            className="rounded-full border border-gray-500 bg-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 py-2 normal-case text-base font-normal"
          >
            Contact Us
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}