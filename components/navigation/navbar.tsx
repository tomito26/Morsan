"use client";
import React from "react";
import Image from "next/image";
import { links } from "@/lib/constants";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const handleDropdownToggle = (linkName: string) => {
    setOpenMenu(openMenu === linkName ? null : linkName);
  };

  const handleLinkClick = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px]  4xl:px-[240px] 5xl:px-[320px]  pl-5 bg-[#0B2E4A]">
      <nav className="flex flex-col md:flex-row md:justify-between items-start md:items-center  md:h-[100px] pb-5 md:pb-0">
        <div className="flex justify-between w-full md:w-auto items-center">
          <Link href="/">
            <div className="w-[200px] h-[100px] relative">
              <Image
                src="/assets/morsanhr.svg"
                alt="Morsan HR "
                fill
                className="absolute"
                priority
              />
            </div>
          </Link>
          <button
            className="md:hidden block mr-4"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-white" />
            ) : (
              <Menu className="w-6 h-6 stroke-white" />
            )}
          </button>
        </div>
        <div
          className={cn(
            "flex-col md:flex-row items-start md:items-center w-full md:w-auto md:h-full",
            isMobileMenuOpen ? "flex absolute top-[80px] left-0 right-0 bg-[#0B2E4A] z-[100] pl-4 py-10" : "hidden md:flex"
          )}
        >
          <ul className="list-none flex flex-col md:flex-row items-start md:items-center w-full md:w-auto h-full">
            {links.map(({ title, href, name, values }) => (
              <li
                key={title}
                className="2xl:mr-10 md:mr-5 md:mt-0 mt-5 text-sm text-white  relative group h-full flex items-center"
              >
                {href ? (
                  <>
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className={cn(
                        pathname === href && "text-white",
                        "relative font-medium hover:text-white"
                      )}
                    >
                      {title}
                      <div
                        className={cn(
                          "absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full mt-1",
                          pathname === href
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        )}
                      />
                    </Link>
                  </>
                ) : (
                  <div key={name} className="h-full">
                    <DropdownMenu
                      onOpenChange={() =>
                        name && handleDropdownToggle(name)
                      }
                      open={openMenu === name}
                    >
                      <DropdownMenuTrigger
                        className="flex items-center h-full focus:outline-0 "
                        onClick={() => name && handleDropdownToggle(name)}
                        aria-haspopup="true"
                        aria-expanded={openMenu === name}
                      >
                        <div className="group  flex items-center">
                          <div className="relative">
                            <p className="text-sm text-white font-medium relative hover:text-white">
                              {title}
                            </p>
                            <div
                              className={cn(
                                "absolute left-0 bottom-0 h-0.5  bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full mt-1",
                                pathname === href
                                  ? "w-full"
                                  : "w-0 group-hover:w-full"
                              )}
                            />
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "rotate-360 transition duration-200 stroke-white",
                            openMenu === name &&
                              "rotate-180 transition duration-200"
                          )}
                        />
                      </DropdownMenuTrigger>
                      {values && (
                        <DropdownMenuContent className="py-2 max-h-[300px] overflow-auto scrollbar">
                          {values.map((navLink, index) => (
                            <Link
                              key={navLink.href}
                              href={navLink.href}
                              onClick={handleLinkClick}
                              target="_self"
                            >
                              <DropdownMenuGroup className="hover:bg-[#f1f1f1] py-2">
                                <span
                                  className={cn(
                                    pathname == navLink.href &&
                                      "text-[#0B2E4A]",
                                    "px-4 text-sm text-body-gray hover:text-[#0B2E4A]"
                                  )}
                                >
                                  {navLink.title}
                                </span>
                              </DropdownMenuGroup>
                              {values.length - 1 !== index && (
                                <DropdownMenuSeparator />
                              )}
                            </Link>
                          ))}
                        </DropdownMenuContent>
                      )}
                    </DropdownMenu>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link
            href={"#"}
            className="bg-white py-1.5 px-4 text-[#0B2E4A] rounded-md text-base font-medium hover:bg-white/90 md:ml-5 md:mt-0 mt-5"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
