'use client';

import React, { useState } from 'react';
import { Eye, EyeSlash, ArrowLeft } from 'iconsax-reactjs';
import AuthContainer from '@/components/auth/AuthContainer';
import Link from 'next/link';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showMismatchError, setShowMismatchError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowMismatchError(true);
    } else {
      setShowMismatchError(false);
      alert('Password updated successfully');
    }
  };

  return (
    <>
    <AuthContainer title="Reset Your Password" subtitle="Create a new password to secure your account">
      <form onSubmit={handleSubmit} className="space-y-6">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            className="w-full p-3 border-2 rounded-md border-[#C8CDD0] outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 cursor-pointer text-[#ACB4B9]"
          >
            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm password
          </label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full p-3 border-2 rounded-md border-[#C8CDD0] outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-10 cursor-pointer text-[#ACB4B9]"
          >
            {showConfirmPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {showMismatchError && (
          <p className="text-red-500 text-sm mt-1">*Passwords do not match</p>
        )}

        <button
          type="submit"
          className="mb-2 bg-primary text-white hover:bg-[#300B22] w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors"
        >
          Update Password
        </button>
      </form>
    </AuthContainer>

    <AuthContainer>
        {/*  */}
            <div className='space-y-5 text-center items-center justify-center flex flex-col'>
                <div className='rounded-full bg-[#30C10B17] size-20 p-3 opacity-90 flex items-center justify-center'>
                <img
                src="/images/tick-circle.svg"
                alt="tick-circle"
                />
                </div>

                <div className='max-w-md'>
                    <h5 className="text-[#2F3437] font-medium text-[16px] lg:text-[22px] leading-6 lg:leading-9">Password Reset Successful</h5>
                    <p className="text-[16px] lg:text-lg leading-6 lg:leading-7 text-[#919BA1] font-normal">
                        Your new password has been saved. You can now sign in to your account
                    </p>
                </div>
                <button
                    type="submit"
                    className="mb-2 bg-primary text-white hover:bg-[#300B22] w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors"
                >
                    <Link href="/login">Go to Sign in</Link>
                </button>
            </div>
        </AuthContainer>

        <AuthContainer>
            {/*  */}
             <div className='space-y-7 text-center items-center justify-center flex flex-col'>
                <div className='rounded-full bg-[#F1101017] size-20 p-3 opacity-90 flex items-center justify-center'>
                    <img 
                    src="/images/close-square.svg"
                    alt="close-square"
                />
                </div>

                <div className='max-w-md'>
                    <h5 className="text-[#2F3437] font-medium text-[16px] lg:text-[22px] leading-6 lg:leading-9">Password Reset Failed</h5>
                    <p className="text-[16px] lg:text-lg leading-6 lg:leading-7 text-[#919BA1] font-normal">
                        We couldn’t update your password
                    </p>
                </div>
                <button
                    type="submit"
                    className="mb-5 bg-primary text-white hover:bg-[#300B22] w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors"
                >
                    Try Again
                </button>

            </div>
            <Link href="/login">
                <p
                    className="text-center flex justify-center text-[14px] text-[#2F3437] cursor-pointer leading-5 items-center gap-2"
                >
                    <span className='text-center'><ArrowLeft size="20" /></span>
                    <span className='text-center'>Back to sign in</span>
                </p>
            </Link>
        </AuthContainer>
    </>
  );
}


















