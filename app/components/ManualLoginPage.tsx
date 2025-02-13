"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import { Input } from "@/components/ui/input";

const ManualLoginPage = () => {
	return (
		<div className="absolute top-[41%] left-[5%]">
			<Card className="w-[300px] min-h-full h-[330px]">
				<CardHeader className="gap-1">
					<CardTitle className="font-normal ml-2">Log in</CardTitle>
				</CardHeader>
				<CardContent className="px-2">
					<form className="mx-5 min-w-[200px] h-full">
						<Input
							type="email"
							placeholder="name@email.com"
							disabled={false}
							value={""}
							onChange={() => {}}
							required={true}
							className="py-5 border-gray-400"
						/>
						<Input
							type="password"
							placeholder="please enter password"
							disabled={false}
							value={""}
							onChange={() => {}}
							required={true}
							className="py-5 mt-5 mb-2 border-gray-400"
						/>

						<span className="text-sm cursor-pointer text-muted-foreground">
							Forgot Password?
						</span>
					</form>
					<Button
						variant="outline"
						size="lg"
						className="bg-black text-white hover:bg-white hover:text-black hover:font-bold mt-4 w-fit min-w-[135px] mx-5 rounded-full"
					>
						Proceed
					</Button>

					<button className="flex items-center ml-4 gap-1 mt-2 text-sm cursor-pointer text-muted-foreground">
						{" "}
						<ArrowRightLeft size={15} />
						{/* <BsArrowLeftRight className="flex flex-row-reverse" /> */}
						Click to switch to google
					</button>
				</CardContent>
			</Card>
		</div>
	);
};

export default ManualLoginPage;
