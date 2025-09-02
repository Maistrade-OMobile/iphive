interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
	return (
		<div className="text-center w-full lg:w-[55%] mx-auto">
			<h2 className="text-[20px] lg:text-[42px] font-medium leading-7 lg:leading-16 text-[#232729]">
				{title}
			</h2>
			{subtitle && (
				<p className="text-[#75828A] text-[16px] lg:text-[22px] leading-6 lg:leading-9">
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default SectionHeader;
