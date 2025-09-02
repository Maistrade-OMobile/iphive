"use client";
import { useState } from "react";
import Container from "../shared/Container";
import SectionHeader from "../common/SectionHeader";
import WaitList from "../waitlist";
import Modal from "../common/Modal";

const YourIdeaSection = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<section className="bg-[#F0E8ED] py-10 flex flex-col justify-center items-center text-center">
				<Container>
					<>
						<SectionHeader
							title="Your Idea Deserves Protection. Your Investment Deserves Opportunities."
							subtitle="IP-HIVE connects innovation to opportunity. Whether you're creating or investing, we make it safe and simple."
						/>
						<button
							className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium cursor-pointer mt-15"
							onClick={() => setOpenModal(true)}
						>
							<span>Join the Waitlist Now</span>
						</button>
					</>
				</Container>
			</section>
			<Modal
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
				contentClassName="bg-white rounded-[8px] py-6 px-10 h-[90vh] w-[90%] md:w-[35%] shadpow-[0px_4px_6px_3px_#3333331A]"
			>
				<WaitList onClose={() => setOpenModal(false)} />
			</Modal>
		</>
	);
};

export default YourIdeaSection;
