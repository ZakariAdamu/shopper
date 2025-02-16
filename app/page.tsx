import Footer from "./components/Footer";
import DesktopLogins from "./components/DesktopLogins";
import LandingPage from "./components/LandingPage";

export default function Home() {
	return (
		<div className="relative">
			<LandingPage />
			<div className="absolute left-[5rem] xl:left-[19%] top-[41%] 2xl:left-[23%]">
				<DesktopLogins />
			</div>
			<Footer />
		</div>
	);
}
