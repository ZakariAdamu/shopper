import React from "react";

const Footer = () => {
	return (
		<div className="flex lg:hidden flex-col items-center justify-center gap-2 mt-[65%] h-full w-full bg-gray-200 opacity-80">
			<div className="top mt-32 mb-5">
				<ul className="flex gap-8 ">
					<li>About</li>
					<li>Products</li>
					<li>Privacy</li>
					<li>Terms</li>
					<li>SME</li>
				</ul>
			</div>
			<div className="bottom mt-2 mb-10">
				<ul className="flex gap-8">
					<li>+234 927370584</li>
					<li>support@test.com</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
