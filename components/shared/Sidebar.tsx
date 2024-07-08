"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo w-full"></Link>

                <nav className="sidebar-nav">
                    <SignedIn>
                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li
                                        key={link.route}
                                        className={`sidebar-nav_element group ${
                                            isActive
                                                ? "bg-black text-white"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <Link
                                            className="sidebar-link"
                                            href={link.route}
                                        >
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${
                                                    isActive && "brightness-200"
                                                }`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li
                                        key={link.route}
                                        className={`sidebar-nav_element group ${
                                            isActive
                                                ? "bg-purple-gradient text-white"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <Link
                                            className="sidebar-link"
                                            href={link.route}
                                        >
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${
                                                    isActive && "brightness-200"
                                                }`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}

                            <li className="flex-center cursor-pointer gap-2 p-4">
                                <UserButton afterSignOutUrl="/" showName />
                            </li>
                        </ul>
                    </SignedIn>

                    <SignedOut>
                        <Button
                            asChild
                            className="bg-black text-white hover:bg-black/80"
                        >
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
