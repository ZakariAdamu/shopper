"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const DesktopLogins = () => {
	const [currentChild, setCurrentChild] = useState(true);

	const handleNext = () => {
		setCurrentChild((prev) => !prev);
	};
	return (
		<div className="hidden lg:flex">
			{currentChild && (
				// Google Login component
				<div className="container m-auto w-[320px] py-7 -mt-[20px]">
					<div className="bg-white px-7 py-8 rounded-2xl w-full shadow-sm h-[290px] mx-4">
						<form>
							<div className="mt-3">
								<h2 className="text-lg text-left mb-2 font-semibold">
									Welcome back
								</h2>
								<p className="text-sm text-left text-muted-foreground">
									Login using:
								</p>
							</div>
							<div className="flex flex-col mt- justify-center mt-8 mx-auto items-center">
								<button className="flex items-center justify-center gap-3 bg-white text-black py-[6px] px-4 w-full rounded-full border border-gray-600 hover:bg-slate-200">
									<FcGoogle className="size-6 left-2.5 top-2.5" /> Login with
									Google
								</button>
								<button
									className="flex items-center self-start gap-1 mt-5 text-sm cursor-pointer text-muted-foreground"
									onClick={handleNext}
								>
									{" "}
									<Image
										src="/switch-horizontal.png"
										width={16}
										height={16}
										alt="switch icon"
									/>
									Click to switch to manual
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
			{!currentChild && (
				// Manual Login component - Desktop
				<div className="">
					<Card className="min-w-[300px] w-[320px] bg-white shadow-sm border-none mt-4">
						<CardHeader className="gap-1">
							<CardTitle className="font-semibold ml-2 hidden lg:block">
								Log in
							</CardTitle>
						</CardHeader>
						<CardContent className="px-2">
							<div className="flex flex-col ">
								<form className="w-[385px] h-full px-5">
									<input
										type="email"
										placeholder="name@email.com"
										disabled={false}
										required
										className="px-3 py-2 border border-gray-400 rounded-[10px] w-[245px]"
									/>
									<input
										type="password"
										placeholder="please enter password"
										disabled={false}
										required
										className="px-3 py-2 mt-5 mb-2 rounded-[10px] border border-gray-400 w-[245px]"
									/>

									<span className="text-sm cursor-pointer text-muted-foreground mt-2 pl-1 flex">
										Forgot Password?
									</span>
								</form>
								<Button
									variant="outline"
									size="lg"
									className="bg-black text-white hover:bg-gray-700 hover:text-white mt-4 w-[135px] ml-5 rounded-full"
								>
									Proceed
								</Button>
							</div>

							<button
								className="flex items-center ml-4 gap-1 mt-2 text-sm cursor-pointer text-muted-foreground"
								onClick={handleNext}
							>
								<Image
									src="/switch-horizontal.png"
									width={16}
									height={16}
									alt="switch icon"
								/>
								<span className="">Click to login with google</span>
							</button>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	);
};

export default DesktopLogins;
