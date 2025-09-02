import React from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="px-[20px] lg:px-[78px] py-[21px]">{children}</div>;
};

export default Container;
