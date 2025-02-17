"use client";
import { ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LandingPage = () => {
	const [currentChild, setCurrentChild] = useState(true);

	const handleNext = () => {
		setCurrentChild((prev) => !prev);
	};

	return (
		<>
			<section className="hero-section hero-bg bg-gradient-to-b from-cyan-50 via-white to-white w-full h-full py-3 lg:-mt-1 lg:pt-5">
				<div className="container shadow-white m-auto max-w-2xl lg:max-w-full xl:max-w-5xl lg:px-10 ">
					<div className="rounded-md m-4 md:m-0">
						<h2 className="text-md text-left mb-6 bg-transparent font-semibold pt-2 lg:hidden">
							Welcome back
						</h2>
						<div>
							<Image
								src="/hero-perfect.png"
								alt="banner"
								width={2000}
								height={1813}
								className="rounded-[36px] w-full h-[230px] lg:h-[340px]"
							/>
						</div>
						{currentChild && (
							// Google Login component - mobile
							<>
								<div className="flex flex-col mt-8 justify-center self-center items-center w-full lg:hidden">
									<button className="flex items-center justify-center gap-3 bg-white text-black py-2 px-4 w-full md:w-[460px] rounded-full border border-gray-600 hover:bg-slate-200">
										<FcGoogle className="size-6 left-2.5 top-2.5" /> Login with
										Google
									</button>
									<button
										className="flex items-center self-start gap-1 mt-5 text-sm cursor-pointer text-muted-foreground md:ml-[6.8rem]"
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
								<div className="flex flex-col flex-grow-0 lg:hidden mt-8">
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
										<button className="bg-black text-white hover:bg-gray-700 hover:text-white mt-7 py-4 w-full rounded-xl">
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
		</>
	);
};

export default LandingPage;
