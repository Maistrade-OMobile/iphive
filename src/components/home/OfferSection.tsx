import { UserOctagon, Profile2User, Diagram } from "iconsax-reactjs";
import Container from "../shared/Container";
import SectionHeader from "../common/SectionHeader";

const offers = [
	{
		icon: UserOctagon,
		title: "For Innovators",
		subtitle: "Protect your ideas and showcase your work.",
		features: [
			{
				label: "Simple Submission",
				text: "File your ideas easily with guided forms.",
			},
			{
				label: "Secure Storage",
				text: "Upload research papers or prototypes with confidentiality.",
			},
			{ label: "Track Progress", text: "Monitor your IP status anytime." },
		],
	},
	{
		icon: Diagram,
		title: "For Investors & Companies",
		subtitle: "Streamline innovation management and reviews",
		features: [
			{
				label: "Browse Verified IPs",
				text: "Explore innovations by category.",
			},
			{
				label: "Secure Profiles",
				text: "Confidential profiles designed to protect your business and investment interests.",
			},
			{ label: "Connect Directly", text: "Start proposals and collaborate." },
		],
	},
	{
		icon: Profile2User,
		title: "For IPTTO Staff",
		subtitle: "Streamline innovation management and reviews",
		features: [
			{ label: "Manage Submissions", text: "Review and update applications." },
			{
				label: "Collaboration Tools",
				text: "Seamless collaboration for smarter IP management.",
			},
			{ label: "Efficient Oversight", text: "Use filters and reports." },
		],
	},
];

const OfferSection = () => {
	return (
		<section>
			<Container>
				<>
					<SectionHeader
						title="What we offer"
						subtitle="Serving Every Stakeholder in the Innovation Ecosystem"
					/>

					<div className="flex flex-col lg:flex-row justify-between gap-6 gap-y-18 mt-15">
						{offers.map((offer) => {
							const Icon = offer.icon;
							return (
								<div
									key={offer.title}
									className="w-full bg-white rounded-[18px] py-10 px-6 lg:px-8 shadow-[0px_4px_6px_3px_#3333331A]"
								>
									<div className="flex items-center justify-center w-18 h-18 mx-auto rounded-[7px] bg-primary -mt-18">
										<Icon className="text-white" size="38" variant="Outline" />
									</div>
									<div className="text-center mt-5">
										<h5 className="text-primary font-medium text-xl lg:text-[24px] leading-7 lg:leading-10">
											{offer.title}
										</h5>
										<p className="text-[#919BA1] text-[16px] lg:text-lg leading-6 lg:leading-[28px] font-normal">
											{offer.subtitle}
										</p>
									</div>
									<ul className="flex flex-col gap-3 mt-6">
										{offer.features.map((f, i) => (
											<li
												key={i}
												className="text-[16px] lg:text-lg leading-6 lg:leading-7 text-[#919BA1] font-normal"
											>
												<span className="text-[#2F3437] font-medium">
													{f.label}:{" "}
												</span>
												{f.text}
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
				</>
			</Container>
		</section>
	);
};

export default OfferSection;
