import React from "react";

interface LoginCardProps {
  currentChild: boolean;
}

const Footer = ({ currentChild }: LoginCardProps) => {
	return (
		<footer
			className={`bg-gray-200 text-black bottom-0 fixed w-full opacity-60 text-sm h-[190px] px-4 pt-10 ${!currentChild ? "hidden" : ""}`}
		>
			<div className="flex flex-col items-center justify-center gap-2 mt-[3px]">
				<ul className="flex flex-grow mt-10 gap-5 ">
					<li className="hover:cursor-pointer">About</li>
					<li className="hover:cursor-pointer">Products</li>
					<li className="hover:cursor-pointer">Privacy</li>
					<li className="hover:cursor-pointer">Terms</li>
					<li className="hover:cursor-pointer">SME</li>
				</ul>
				<div className="mt-4">
					<ul className="flex gap-8">
						<li>+234 927370584</li>
						<li>support@test.com</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
