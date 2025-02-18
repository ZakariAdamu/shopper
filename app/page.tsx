import DesktopLogins from "./components/DesktopLogins";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

type loginCardProps = {
	currentChild: boolean;
};

export default function Home({ currentChild }: loginCardProps) {
	return (
		<div className="relative">
			<LandingPage />
			<div className="absolute desktop-login-container top-[39%] left-[10%] xl:left-[5%]">
				<DesktopLogins />
			</div>
			<Footer currentChild={currentChild} />
		</div>
	);
}
