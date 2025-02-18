import DesktopLogins from "../components/DesktopLogins";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

const LoginPage = ({ currentChild }: { currentChild: boolean }) => {
	return (
		<div className="relative">
			<LandingPage />
			<div className="absolute desktop-login-container top-[39%] left-[10%] xl:left-[5%]">
				<DesktopLogins />
			</div>
			<Footer currentChild={currentChild} />
		</div>
	);
};

export default LoginPage;
