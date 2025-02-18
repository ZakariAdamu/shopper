"use client";
import { ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Footer from "./Footer";

const LandingPage = () => {
	const [currentChild, setCurrentChild] = useState(true);

	const handleNext = () => {
		setCurrentChild((prev) => !prev);
	};

	return (
		<>
			<section className="hero-section hero-bg  w-full h-full pt-4 lg:-mt-2 lg:pt-5">
				<div className="container shadow-white m-auto w-full lg:px-5 md:w-[90%] h-full lg:w-full">
					<div className="rounded-md m-4 md:m-0">
						<h2 className="text-md text-left mb-6 bg-transparent font-semibold pt-2 lg:hidden">
							Welcome back
						</h2>
						{/* mobile image */}
						<div className="">
							<Image
								src="/shopper-hero-img1.png"
								alt="banner"
								width={2000}
								height={1813}
								className="mobile-img sm:hidden h-[250px]"
							/>
							{/* desktop image begins from 640px */}
							<Image
								src="/hero-perfect.png"
								alt="banner"
								width={2000}
								height={1813}
								className="rounded-[36px] w-full hidden sm:flex h-[275px] lg:h-[360px]"
							/>
						</div>
						{currentChild && (
							// Google Login component - mobile
							<>
								<div className="flex flex-col mt-8 justify-center self-center items-center w-full mx-auto lg:hidden">
									<button className="flex items-center justify-center gap-3 bg-white text-black py-2 px-4 w-full rounded-full border border-gray-600 hover:bg-slate-200">
										<FcGoogle className="size-6 left-2.5 top-2.5" /> Login with
										Google
									</button>
									<button
										className="flex items-center self-start gap-1 mt-5 text-sm cursor-pointer text-muted-foreground "
										onClick={handleNext}
									>
										{" "}
										<ArrowRightLeft size={15} />
										Click to switch to manual
									</button>
								</div>
							</>
						)}
						{!currentChild && (
							// Manual Login component - mobile
							<>
								<div className="flex flex-col lg:hidden mt-8">
									<form className="">
										<input
											type="email"
											placeholder="name@email.com"
											disabled={false}
											className="p-3 border border-gray-400 w-full rounded-xl"
										/>
										<input
											type="password"
											placeholder="please enter password"
											disabled={false}
											required
											className="p-3 mt-5 mb-3 border border-gray-400 w-full rounded-xl"
										/>

										<span className="text-sm cursor-pointer text-muted-foreground">
											Forgot Password?
										</span>
										<button className="bg-black text-white hover:bg-gray-700 hover:text-white mt-7 py-3 w-full rounded-[10px]">
											Proceed
										</button>
									</form>

									<button
										className="flex items-center ml-1 gap-1 mt-3 text-sm cursor-pointer text-muted-foreground"
										onClick={handleNext}
									>
										{" "}
										<ArrowRightLeft size={15} />
										<span className="">Click to switch to Google</span>
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</section>
			<Footer currentChild={currentChild} />
		</>
	);
};

export default LandingPage;
