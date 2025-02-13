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
import React from "react";

const GoogleLoginPage = () => {
	return (
		<div className="absolute top-[41%] left-[5%]">
			<Card className="w-[300px] h-[330px]">
				<CardHeader className="self-start gap-1">
					<CardTitle className="font-normal mt-4">Welcome back</CardTitle>
					<CardDescription className="text-sm text-muted-foreground">
						Login using:
					</CardDescription>
				</CardHeader>

				<CardContent className="px-2 sm:px-6">
					{/* <Separator className="my-3" /> */}
					<div className="flex my-2 justify-evenly mx-auto items-center">
						<Button
							disabled={false}
							onClick={() => {}}
							variant="outline"
							size="lg"
							className="hover:bg-slate-200 border-gray-600 w-full rounded-full"
						>
							<FcGoogle className="size-12 left-2.5 top-2.5" /> Login with
							Google
						</Button>
					</div>
					<button className="flex items-center ml-4 gap-1 mt-5 text-sm cursor-pointer text-muted-foreground">
						{" "}
						<ArrowRightLeft size={15} />
						{/* <BsArrowLeftRight className="flex flex-row-reverse" /> */}
						Click to switch to manual
					</button>
				</CardContent>
			</Card>
		</div>
	);
};

export default GoogleLoginPage;
