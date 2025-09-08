import React, { ReactNode } from 'react';

interface AuthContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ title, subtitle, children }) => {
  return (
    <div className=" bg-[#F1F2F3] flex flex-col items-center justify-center">
      <img
        src="/images/logo.svg"
        alt="Iphive-logo"
        className="m-5"
      />

      <div className="text-center mb-6">
        <h5 className="text-[#232729] font-medium text-[20px] lg:text-[32px] leading-7 lg:leading-12 mb-1">
            {title}
        </h5>
        <p className="text-[#525B61] text-lg leading-7 font-normal">
            {subtitle}
        </p>
      </div>

      <div className="bg-white rounded-lg md:p-13 p-10 shadow-lg w-full max-w-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
