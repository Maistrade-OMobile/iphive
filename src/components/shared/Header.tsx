"use client";
import { useState } from "react";
import Modal from "../common/Modal";
import WaitList from "../waitlist";
const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<header className="flex items-center justify-between gap-3 px-[20px] lg:px-[78px] py-5 bg-[#F0E8ED]">
				<img
					src="/images/logo.svg"
					alt="Iphive-logo"
					className="w-[98px] lg:w-auto"
				/>
				<button
					className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium cursor-pointer"
					onClick={() => setOpenModal(true)}
				>
					<span>Join Waitlist</span>
				</button>
			</header>
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

export default Header;
