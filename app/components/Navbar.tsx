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
		<nav className="bg-white">
			{/* Desktop display */}
			<div className="hidden lg:flex container w-full sticky m-auto top-0 py-2 items-center justify-between mb-0">
				{/* Left */}
				<div className="flex items-center justify-end w-full font-semibold gap-1">
					<MdLocationPin /> <span>Abuja</span>
				</div>
				{/* Right */}
				<div className="right-items w-full flex items-center justify-end">
					<div className="flex items-center justify-between gap-7 mr-9">
						<Link
							href="/store"
							className={`hover:text-[#B63B56] relative pt-4 pb-5 font-semibold px-[6px] ${
								pathname === "/store" &&
								"bg-gradient-to-r from-[#C67250] to-[#9B5B9A] bg-clip-text text-transparent font-normal"
							}`}
						>
							Store
							{pathname === "/store" && (
								<span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#C67250] to-[#9B5B9A]"></span>
							)}
						</Link>
						<Link
							href="/login"
							className={`hover:text-[#B63B56] relative pt-4 pb-5 font-semibold px-[6px] ${
								pathname === "/login" &&
								"bg-gradient-to-r from-[#C67250] to-[#9B5B9A] bg-clip-text text-transparent font-normal"
							}`}
						>
							login
							{pathname === "/login" && (
								<span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#C67250] to-[#9B5B9A]"></span>
							)}
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
		</nav>
	);
};

export default Navbar;
