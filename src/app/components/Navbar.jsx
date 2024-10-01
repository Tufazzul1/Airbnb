"use client"

import Image from 'next/image';
import React from 'react';
import Logo from "../../../public/Airbnb-Logo.png";
import { TbWorld } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {

    const pathname = usePathname();
    const navItems = [
        {
            title: "Stays",
            path: "/",
        },
        {
            title: "Experiences",
            path: "/experices",
        }
    ];


    return (
        <div className="navbar">
            <div className="navbar-start">
                <Link href={'/'}><Image src={Logo} alt='Logo' width={130}></Image></Link>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 font-semibold text-[16px] flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link href={item.path} key={item.title}>
                            <div className={pathname === item.path ? "font-bold" : "font-normal"}>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="navbar-end pr-5">
                <button className="btn hover:bg-gray-100 bg-white border-none shadow-none rounded-full">
                    Airbnb your home
                </button>
                <button className="btn hover:bg-gray-100 bg-white border-none shadow-none btn-circle">
                    <TbWorld className='text-xl' />
                </button>
                <div>
                    <button className='flex gap-3 border-2 bg-white hover:bg-white hover:shadow-lg btn rounded-full' >
                        <RxHamburgerMenu />
                        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25" height="25" aria-label="Custom Icon">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#494c4e" d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>

            {/* nav part 2 */}
            <div>
                    
            </div>
        </div>


    );
};

export default Navbar;