"use client";
import { ArrowRight } from "iconsax-reactjs";
import Container from "../shared/Container";
import { useState } from "react";
import Modal from "../common/Modal";
import WaitList from "../waitlist";

const HeroSection = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<section>
				<Container>
					<div className="flex flex-col lg:flex-row  items-center justify-center gap-12 mt-10">
						{/*.......... Hero text..... */}
						<div className="w-full lg:w-[50%]">
							<span className="bg-[#E9DCE4] text-[#501239] font-normal py-2 px-3 text-sm leading-5 rounded-[20px]">
								Secure. Verified. Connected.
							</span>
							<h1 className="text-[32px] lg:text-5xl font-medium leading-[48px] lg:leading-[72px] text-[#2F3437] my-4">
								Protect Your Ideas. Discover Innovations. All in One{" "}
								<span className="text-primary font-bold">Platform.</span>
							</h1>
							<p className="text-[#75828A] text-[16px] lg:text-xl leading-6 lg:leading-7 font-normal pr-0 lg:pr-2">
								IP-HIVE makes intellectual property simple, secure, and
								accessible — helping innovators protect their ideas while giving
								investors access to verified opportunities.
							</p>
							<div className="mt-12">
								<div
									className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium inline-flex items-center gap-2 cursor-pointer"
									onClick={() => setOpenModal(true)}
								>
									<p>Join Waitlist</p>
									<ArrowRight size="24" />
								</div>
								<div className="flex items-center gap-2 mt-4">
									<img
										src="/images/innovators.svg"
										alt="innovators"
										className="w-[70px]"
									/>
									<h4 className="text-[#232729] text-sm leading-5">
										1,000+ Innovators and Investors have joined the wait-list
									</h4>
								</div>
							</div>
						</div>
						{/*.......... Hero Banner...... */}
						<img
							src="/images/hero.png"
							alt="hero-banner"
							className="w-full lg:w-[50%]"
						/>
					</div>
				</Container>
			</section>
			<Modal
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
				contentClassName="bg-white rounded-[8px] py-6 px-10 h-[90vh] w-[90%] md:w-[35%] shadow-[0px_4px_6px_3px_#3333331A]"
			>
				<WaitList onClose={() => setOpenModal(false)} />
			</Modal>
		</>
	);
};

export default HeroSection;
