import React from "react";
import DesktopLogins from "../components/DesktopLogins";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

const LoginPage = () => {
	return (
		// Delete all commented components
		<div className="relative">
			<LandingPage />
			<div className="absolute left-[5rem] xl:left-[19%] top-[41%] 2xl:left-[23%]">
				<DesktopLogins />
			</div>
			<Footer />
		</div>
	);
};

export default LoginPage;
