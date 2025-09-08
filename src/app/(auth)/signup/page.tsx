'use client';

import { Eye, EyeSlash } from 'iconsax-reactjs';
import React, { useState } from 'react';
import AuthContainer from '@/components/auth/AuthContainer';
import Link from 'next/link';


const roles = ['Innovator', 'Investor'];

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [choosenRole, setChoosenRole] = useState<number>(0);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted');
    console.log({
      ...formData,
      role: roles[choosenRole],
    });
  };

  return (
    <div>
      <AuthContainer
        title="Create Your Account"
        subtitle="Join our innovation platform and start your journey"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h6 className="text-[#232729] font-medium text-xl lg:text-[24px] leading-7 lg:leading-10">
              Choose Your Role
            </h6>
            <div className="w-full flex gap-0 justify-between outline-none border-[#C8CDD0] border-2 rounded-md flex-row bg-[#F1F2F3]">
              {roles.map((role, index) => (
                <button
                  key={role}
                  type="button"
                  className={`${
                    choosenRole === index
                      ? 'rounded-md text-primary bg-white'
                      : 'rounded-none text-[#2F3437] bg-[#F1F2F3]'
                  } text-[16px] font-medium leading-6 py-3 px-4 w-1/2 `}
                  onClick={() => setChoosenRole(index)}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

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
              className="w-full p-3 border-2 rounded-md outline-none border-[#C8CDD0] placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out"
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
              className="w-full p-3 border-2 rounded-md border-[#C8CDD0] outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full p-3 border-2 rounded-md border-[#C8CDD0] outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer text-[#ACB4B9]"
            >
              {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            className="mb-2 bg-primary text-white hover:bg-[#300B22] w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-[14px] text-[#69757C] leading-5">
          Already have an account? <Link href="/login"><span className="text-primary">Login</span></Link>
        </p>
      </AuthContainer>
    </div>
  );
};

export default SignupPage;