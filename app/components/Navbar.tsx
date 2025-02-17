"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<header>
			{/* Desktop display */}
			<div className="hidden lg:flex sticky top-0 py-2 px-10 gap-2 items-center justify-between">
				{/* Left */}
				<div className="flex items-center ml-[40%] font-semibold gap-1">
					<MdLocationPin /> <span>Abuja</span>
				</div>
				{/* Right */}
				<div className="right-items w-[45%] flex items-center justify-between">
					<div className="flex items-center justify-between gap-10">
						<Link
							href="/"
							className={`hover:text-[#B63B56] py-3 font-semibold ${
								pathname === "/store" &&
								"text-[#B63B56] border-b-2 border-b-[#B63B56]"
							}`}
						>
							Store
						</Link>
						<Link
							href="/login"
							className={`hover:text-[#B63B56] py-3 font-semibold ${
								pathname === "/login" &&
								"text-[#B63B56] border-b-2 border-b-[#B63B56]"
							}`}
						>
							login
						</Link>
						<Link
							href="/"
							className="bg-[#B63B56] text-white py-[15px] px-4 rounded-[10px]"
						>
							Become a Shopper
						</Link>
					</div>
				</div>
			</div>
			{/* Mobile display */}
			<div className="navbar-mobile flex lg:hidden items-center justify-evenly min-w-[300px] pt-1">
				<div className="left"></div>
				<div className="right flex items-center justify-end w-full gap-2 p-2">
					<Image
						src="/user-circle.png"
						width={30}
						height={30}
						alt="user-icon"
					/>

					<Menu
						className="cursor-pointer lg:hidden border-slate-400"
						size={30}
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
