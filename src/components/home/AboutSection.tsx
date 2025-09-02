import SectionHeader from "../common/SectionHeader";
import Container from "../shared/Container";

const AboutSection = () => {
	return (
		<section>
			<Container>
				<>
					<SectionHeader
						title="About IP-HIVE"
						subtitle="Where great ideas meet protection and opportunity"
					/>
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-16">
						<img
							src="/images/iphive.svg"
							alt="iphive-banner-logo"
							className="w-full lg:w-[45%]"
						/>
						<div className="w-full lg:w-[55%]">
							<p className="mt-2 text-[#919BA1] font-normal text-[16px] lg:text-xl leading-6 lg:leading-8">
								<span className="font-medium text-[#69757C]">IP-HIVE</span> is a
								digital platform created to{" "}
								<span className="font-medium text-[#69757C]">
									simplify and scale intellectual property (IP) access for
									students, researchers, and investors.
								</span>{" "}
								We are building on the work of universities and their
								Intellectual Property & Technology Transfer Offices (IPTTOs) to
								provide a modern, secure, and connected system for protecting
								innovations and linking them to real-world opportunities. At its
								core, IP-HIVE exists to solve two critical problems:
							</p>
							<ul className="flex flex-col gap-3 mt-4">
								<li className="text-[16px] lg:text-xl leading-6 lg:leading-7 text-[#919BA1] font-normal">
									<span className="text-[#232729] font-medium">
										For Innovators and Researchers:{" "}
									</span>
									IP-HIVE simplifies IP protection with easy submissions, secure
									storage, and status tracking.
								</li>
								<li className="text-[16px] lg:text-xl leading-6 lg:leading-7 text-[#919BA1] font-normal">
									<span className="text-[#232729] font-medium">
										For Investors and Companies:{" "}
									</span>
									IP-HIVE provides access to verified innovations, secure
									profiles, and direct connections with innovators.
								</li>
							</ul>
						</div>
					</div>
				</>
			</Container>
		</section>
	);
};

export default AboutSection;
