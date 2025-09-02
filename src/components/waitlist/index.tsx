import { ArrowDown2 } from "iconsax-reactjs";
import Image from "next/image";
import { useState } from "react";

interface FormData {
	fullName: string;
	email: string;
	userRole: string;
	receiveUpdates: boolean;
}

const WaitList = ({ onClose }: { onClose: () => void }) => {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		userRole: "",
		receiveUpdates: false,
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	return (
		<div className="flex flex-col h-full">
			<div
				className="flex items-center justify-center -mt-10 mb-5 h-10 w-10 mx-auto rounded-full bg-white shadow-2xl cursor-pointer"
				onClick={onClose}
			>
				<span className="text-[#232729] font-bold">X</span>
			</div>
			<div className="flex-1 overflow-y-auto no-scrollbar">
				<div className="flex items-center justify-center">
					<img src="/images/logo.svg" alt="Iphive-logo" className="w-[98px]" />
				</div>
				<div className="text-center mb-8">
					<h5 className="text-[#232729] text-[20px] lg:text-3xl leading-7 lg:leading-12 font-bold">
						Join the IP-HIVE Waitlist
					</h5>
					<p className="text-[#75828A] text-[16px] lg:text-xl leading-6 lg:leading-7">
						Join our exclusive waitlist and be the first to know when we launch
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="fullName"
							className="block text-[16px] font-medium text-[#2F3437] leading-6 mb-1"
						>
							Full name
						</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							value={formData.fullName}
							onChange={handleInputChange}
							placeholder="Enter your full name"
							className="w-full p-3 border-2 border-[#C8CDD0] rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Enter your email address"
							className="w-full p-3 border-2 border-[#C8CDD0] rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6"
						/>
					</div>

					<div>
						<label
							htmlFor="userRole"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							User Role
						</label>
						<div className="relative">
							<select
								id="userRole"
								name="userRole"
								value={formData.userRole}
								onChange={handleInputChange}
								className="w-full p-3 border-2 border-[#C8CDD0] rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 appearance-none"
							>
								<option value="" disabled>
									Select role
								</option>
								<option value="investor">Investor</option>
								<option value="innovator">Innovator</option>
							</select>
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
								<ArrowDown2 size="20" />
							</div>
						</div>
					</div>

					<div className="flex items-center gap-2 ">
						<input
							type="checkbox"
							id="receiveUpdates"
							name="receiveUpdates"
							checked={formData.receiveUpdates}
							onChange={handleInputChange}
							className=" w-4 h-4 text-primary border-[#292D32] rounded focus:ring-purple-500"
						/>
						<label
							htmlFor="receiveUpdates"
							className="text-sm text-[#69757C] leading-5"
						>
							I want to receive email updates about IP-HIVE&apos;s launch and
							news.
						</label>
					</div>

					<button
						type="submit"
						onClick={handleSubmit}
						className="w-full bg-primary text-white font-medium py-3 px-4 rounded-lg cursor-pointer"
					>
						Join Waitlist
					</button>
				</form>
			</div>
		</div>
	);
};

export default WaitList;
