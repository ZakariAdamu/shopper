import React from "react";
import LandingPage from "../components/LandingPage";
import SignUpForms from "../components/SignUpForms";

const LoginPage = () => {
	return (
		<div className="mx-10 relative">
			<LandingPage />
			<div className="absolute min-w-[300px] w-full left-[3%] top-[83%] lg:top-[41%] lg:left-[5%] -z-10 lg:z-0">
				<SignUpForms />
			</div>
		</div>
	);
};

export default LoginPage;
