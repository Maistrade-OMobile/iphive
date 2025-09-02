"use client";
import { MinusCirlce, AddCircle } from "iconsax-reactjs";
import { useState } from "react";
import Container from "../shared/Container";

const questions = [
	{
		question: "What is IP-HIVE?",
		answer:
			"IP-Hive is a digital platform designed to simplify and scale intellectual property(IP) access for innovators and researchers by connecting them with patent officers, legal experts, and potential investors or companies",
	},
	{
		question: "Who can use IP-Hive?",
		answer:
			"IP-Hive is designed for innovators, researchers, patent officers, universities,  companies, and investors interested in discovering, protecting,or supporting new inventions.",
	},
	{
		question: "How does IP-Hive work with OAU’s IPTTO?",
		answer:
			"We build on the foundation of Obafemi Awolowo University’s Intellectual Property and TechnologyTransfer Office (IPTTO), digitizing its processes and expanding access to investors, innovators, researchers and collaborators globally.",
	},
	{
		question: "How can I submit my invention on IP-Hive?",
		answer:
			"Simply register as an innovator, fill out the submission form with your invention details, and upload relevant documents. You will then be able to track the progress of your application in real time.",
	},
	{
		question: "What types of intellectual property can I file?",
		answer:
			"You can submit patents, designs, and other IP types through the multi-IP submission form.",
	},
];

const FaqSection = () => {
	const [showAnswer, setShowAnswer] = useState(false);
	const [openIndex, setOpenIndex] = useState<null | number>(null);

	const questionClicked = (index: number) => {
		setShowAnswer(!showAnswer);
		setOpenIndex((e) => (e === index ? null : index));
	};

	return (
		<section>
			<Container>
				<>
					<div className="text-center mb-20">
						<h2 className="text-[20px] lg:text-[44px] font-medium leading-7 lg:leading-16 text-[#2F3437] mb-2">
							Frequently Asked Questions (FAQs)
						</h2>
						<p className="text-[#3A4145] text-[16px] lg:text-2xl  leading-6 lg:leading-9">
							Find quick answers to the most common questions
						</p>
					</div>
					<div className="flex flex-col gap-y-3 mt-20">
						{questions.map((question, index) => (
							<div
								key={index}
								className={`flex flex-col w-full bg-white rounded-[15px] py-10 ${
									openIndex === index
										? "border-1 border-primary"
										: "border-none"
								} px-6`}
							>
								<div
									className="flex justify-between"
									onClick={() => questionClicked(index)}
								>
									<h6 className="text-text-[#232729] font-medium text-xl lg:text-[24px] leading-7 lg:leading-10">
										{`${index + 1}. ${question.question}`}
									</h6>

									<div>
										<div className="bg-[#E9DCE4] lg:p-2 p-1 rounded-lg">
											{openIndex === index ? <MinusCirlce /> : <AddCircle />}
										</div>
									</div>
								</div>

								{openIndex === index && (
									<p className="text-[#919BA1] text-[16px] lg:text-lg leading-6 lg:leading-[28px] font-normal">
										{question.answer}
									</p>
								)}
							</div>
						))}
					</div>
				</>
			</Container>
		</section>
	);
};

export default FaqSection;
