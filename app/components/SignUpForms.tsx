"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const SignUpForms = () => {
	const [currentChild, setCurrentChild] = useState(true);

	const handleNext = () => {
		setCurrentChild((prev) => !prev);
	};
	return (
		<>
			{currentChild && (
				// Google Login component
				<div className="">
					<Card className="border-none lg:border shadow-none lg:shadow-md min-w-[300px] w-[400px] h-[330px]">
						<CardHeader className="self-start gap-1">
							<CardTitle className="font-normal mt-4 hidden lg:block">
								Welcome back
							</CardTitle>
							<CardDescription className="text-sm text-muted-foreground">
								Login using:
							</CardDescription>
						</CardHeader>

						<CardContent className="px-2 sm:px-6">
							<div className="flex my-2 justify-center mx-auto items-center">
								{/* <Button
									disabled={false}
									onClick={() => {}}
									variant="outline"
									size="lg"
									className="hover:bg-slate-200 border-gray-600 py-2 rounded-full w-fit min-w-[300px] -ml-4 mr-auto sm:ml-auto"
								>
									<FcGoogle className="size-12 left-2.5 top-2.5" /> Login with
									Google
								</Button> */}
								<Button
									disabled={false}
									onClick={() => {}}
									variant="outline"
									size="lg"
									className="google-btn hover:bg-slate-200 border-gray-600 py-2 rounded-full w-fit min-w-[300px] self-center -ml-4 mr-auto"
								>
									<FcGoogle className="size-12 left-2.5 top-2.5" /> Login with
									Google
								</Button>
							</div>
							<button
								className="flex items-center ml-4 gap-1 mt-5 text-sm cursor-pointer text-muted-foreground"
								onClick={handleNext}
							>
								{" "}
								<ArrowRightLeft size={15} />
								Click to switch to manual
							</button>
						</CardContent>
					</Card>
				</div>
			)}
			{!currentChild && (
				// Manual Login component
				<div className="">
					<Card className="border-none lg:border shadow-none lg:shadow-md min-w-[300px] w-[400px] min-h-full h-[330px]">
						<CardHeader className="gap-1">
							<CardTitle className="font-normal ml-2">Log in</CardTitle>
						</CardHeader>
						<CardContent className="px-2">
							<form className="lg:mx-5 mt-10 lg:mt-0 min-w-[200px] w-full lg:w-fit mx-auto h-full">
								<Input
									type="email"
									placeholder="name@email.com"
									disabled={false}
									value={""}
									onChange={() => {}}
									required={true}
									className="py-5 border-gray-400 w-full lg:w-fit"
								/>
								<Input
									type="password"
									placeholder="please enter password"
									disabled={false}
									value={""}
									onChange={() => {}}
									required={true}
									className="py-5 mt-5 mb-2 border-gray-400 w-full lg:w-fit min-w-[135px]"
								/>

								<span className="text-sm cursor-pointer text-muted-foreground">
									Forgot Password?
								</span>
							</form>
							<Button
								variant="outline"
								size="lg"
								className="bg-black text-white hover:bg-white hover:text-black hover:font-bold mt-4 w-full lg:w-fit min-w-[135px] mx-auto lg:mx-5 rounded-full"
							>
								Proceed
							</Button>

							<button
								className="flex items-center ml-4 gap-1 mt-2 text-sm cursor-pointer text-muted-foreground"
								onClick={handleNext}
							>
								{" "}
								<ArrowRightLeft size={15} />
								<span className="mt-2">Click to switch to google</span>
							</button>
						</CardContent>
					</Card>
				</div>
			)}
		</>
	);
};

export default SignUpForms;
