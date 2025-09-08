'use client';

import React, { useState } from 'react';
import { Eye, EyeSlash } from 'iconsax-reactjs';
import AuthContainer from '@/components/auth/AuthContainer';
import Link from 'next/link';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<LoginFormData>({
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
    console.log('Login form submitted:', formData);
  };

  return (
    <AuthContainer title="Welcome Back" subtitle="Sign in to access your dashboard">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h5 className="text-[#2F3437] font-medium text-[16px] lg:text-[22px] leading-6 lg:leading-9">Sign In</h5>
          <p className="text-[16px] lg:text-lg leading-6 lg:leading-7 text-[#919BA1] font-normal">
            Enter your credentials to access your account
          </p>
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
            Enter your password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-3 border-2 rounded-md border-[#C8CDD0] outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 cursor-pointer text-[#ACB4B9]"
          >
            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </span>

          <Link href="/forgot-password"><p className="text-right text-[13px] text-primary leading-5">
          Forgot password?
        </p></Link>
        </div>


        <button
          type="submit"
          className="mb-2 bg-primary text-white hover:bg-[#300B22] w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors"
        >
          Sign In
        </button>
      </form>

      <p className="text-[13px] text-[#69757C] leading-5">
        Don't have an account? <Link href="/signup"><span className="text-primary">Sign up</span></Link>
      </p>
    </AuthContainer>
  );
}