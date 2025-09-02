"use client";
import { Folder, People, ProfileTick, Shield } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import Container from "../shared/Container";

const HowSection = () => {
	const [activeStep, setActiveStep] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const steps = document.querySelectorAll("[data-step]");
			const windowHeight = window.innerHeight;
			const scrollY = window.scrollY;

			let newActiveStep = 0;

			steps.forEach((step, index) => {
				const rect = step.getBoundingClientRect();
				const elementTop = scrollY + rect.top;
				const elementBottom = elementTop + rect.height;
				const viewportCenter = scrollY + windowHeight / 2;

				if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
					newActiveStep = index;
				}
			});

			setActiveStep(newActiveStep);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const steps = [
		{
			icon: ProfileTick,
			title: "Sign Up",
			description:
				"Create an account as either an Innovator or Investor. Innovators verify with their OAU email, while investors register to explore opportunities.",
		},
		{
			icon: Folder,
			title: "Submit or Discover Innovations",
			description:
				"Innovators: Start a new submission, choose the IP type, and upload documents. Investors: Browse the marketplace and filter for innovations that interest you.",
		},
		{
			icon: Shield,
			title: "Secure Review & Tracking",
			description:
				"Innovators: Pay securely, then track your IP status from your dashboard. IPTTO Staff: Review and approve submissions. Investors: View secure, verified innovation profiles.",
		},
		{
			icon: People,
			title: "Connect & Grow",
			description:
				"Innovators get visibility, investors send proposals, and both parties connect through the platform — safely and directly under IPTTO oversight.",
		},
	];

	return (
		<section className="bg-[#F0E8ED] py-10">
			<Container>
				<>
					<div className="text-center mb-20">
						<h2 className="text-[20px] lg:text-[44px] font-medium leading-7 lg:leading-16 text-[#2F3437] mb-2">
							How it works
						</h2>
						<p className="text-[#3A4145] text-[16px] lg:text-2xl leading-6 lg:leading-9">
							Simple steps from sign-up to success
						</p>
					</div>
					<div className="relative flex flex-col gap-24">
						{/* Background line */}
						<div className="absolute left-1/2 -top-6 bottom-6 w-[5px] bg-[#E5E9EB] transform -translate-x-1/2 z-0 rounded-3xl"></div>

						{/* Individual line segments for each step */}
						{steps.map((_, index) => (
							<div
								key={`line-${index}`}
								className={`absolute left-1/2 w-[5px] transform -translate-x-1/2 z-5 rounded-3xl transition-all duration-300 ${
									activeStep === index ? "bg-primary" : "bg-transparent"
								}`}
								style={{
									top: `${index * 25}%`,
									height: "25%",
								}}
							></div>
						))}

						{steps.map((step, index) => {
							const IconComponent = step.icon;
							const isActive = activeStep === index;
							const isEven = index % 2 === 0;

							return (
								<div
									key={index}
									data-step={index}
									className={`relative flex ${
										isEven ? "" : "flex-row-reverse"
									} items-start justify-between gap-6 z-20`}
								>
									<div className="w-[40%]">
										<div
											className={`flex items-center justify-center w-20 h-20 lg:w-40 lg:h-40 mx-auto rounded-full relative z-30 transition-all duration-300 ${
												isActive
													? "bg-primary text-white"
													: "bg-transparent border-3 border-primary text-primary"
											}`}
										>
											<IconComponent
												size="40"
												className="lg:w-[70px] lg:h-[70px]"
											/>
										</div>
									</div>
									<div className="w-[42%]">
										<h5 className="text-[#232729] font-medium text-[20px] lg:text-[30px] leading-7 lg:leading-12 mb-2">
											{step.title}
										</h5>
										<p className="text-[#525B61] text-lg leading-7 font-normal">
											{step.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</>
			</Container>
		</section>
	);
};

export default HowSection;
