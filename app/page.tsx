import DesktopLogins from "./components/DesktopLogins";
import LandingPage from "./components/LandingPage";

const HomePage = () => {
	return (
		<div className="relative">
			<LandingPage />
			<div className="absolute desktop-login-container top-[39%] left-[10%] xl:left-[5%]">
				<DesktopLogins />
			</div>
		</div>
	);
};

export default HomePage;
