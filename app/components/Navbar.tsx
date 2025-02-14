"use client";
import { CircleUser, Menu } from "lucide-react";
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
				<div className="w-[45%]"></div>
				{/* Right */}
				<div className="right-items w-[45%] flex items-center justify-between">
					<div className="flex items-center gap-1">
						<MdLocationPin /> <span>Abuja</span>
					</div>
					<div className="flex items-center justify-between gap-10">
						<Link
							href="/"
							className={`hover:text-red-600 py-3 ${
								pathname === "/store" &&
								"text-red-600 border-b border-b-red-600"
							}`}
						>
							Store
						</Link>
						<Link
							href="/login"
							className={`hover:text-red-600 py-3 ${
								pathname === "/login" &&
								"text-red-600 border-b border-b-red-600"
							}`}
						>
							login
						</Link>
						<Link
							href="/"
							className="bg-red-500 text-white py-3 px-4 rounded-md"
						>
							Become a Shopper
						</Link>
					</div>
				</div>
			</div>
			{/* Mobile display */}
			<div className="navbar flex items-center justify-evenly min-w-[300px] p-3 lg:hidden">
				<div className="left"></div>
				<div className="right flex items-center justify-end w-full gap-2 p-2">
					<CircleUser className="border-slate-400" />

					<Menu className="cursor-pointer lg:hidden border-slate-400" />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
