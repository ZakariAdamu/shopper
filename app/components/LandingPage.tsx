import Image from "next/image";

const LandingPage = () => {
	return (
		<div className="mt-7">
			<h2 className="lg:hidden">Welcome back</h2>
			<Image
				src="/hero-perfect.png"
				alt="banner"
				width={1900}
				height={850}
				className="w-screen mt-10 lg:mt-4 min-w-[300px] min-h-[250px] lg:min-w-[500px] rounded-3xl"
			/>
		</div>
	);
};

export default LandingPage;
