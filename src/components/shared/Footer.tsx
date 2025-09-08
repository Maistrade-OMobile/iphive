'use client';
import { CallCalling, Location, Sms } from 'iconsax-reactjs';
import Container from './Container';
import { useWaitlistModal } from '@/hooks/useWaitListModal';
import WaitlistModals from '../waitlist';
import Link from 'next/link';

const Footer = () => {
  const {
    isWaitlistOpen,
    isSuccessOpen,
    isErrorOpen,
    openWaitlist,
    showSuccess,
    showError,
    retryWaitlist,
    closeAllModals,
  } = useWaitlistModal();
  return (
    <>
      <footer className="bg-[#400E2E] text-[#F1F2F3]">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-8 py-5">
            <div className="w-full lg:w-[45%]">
              <Link href="/">
                <img src="/images/logo-white.svg" alt="Iphive-logo" />
              </Link>

              <p className="text-lg leading-7 font-normal mt-3">
                IP-HIVE makes intellectual property simple, secure, and
                accessible — helping innovators protect their ideas while giving
                investors access to verified opportunities.
              </p>
              {/* <div className="flex items-center gap-2 mt-6">
							<a href="https://x.com" target="_blank" rel="noopener noreferrer">
								<img src="/images/x.svg" alt="x" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="/images/instagram.svg" alt="instagram" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="/images/linkedin.svg" alt="linkedin" />
							</a>
						</div> */}

              <button
                className="bg-primary text-white rounded-lg py-3 px-5 text-[14px] leading-6 font-normal mt-8 inline-block cursor-pointer transition-colors duration-300 hover:bg-[#300B22]"
                onClick={openWaitlist}
              >
                <span>Join Waitlist</span>
              </button>
            </div>
            <div className="flex items-start gap-20 mt-10">
              <div>
                <h6 className="font-medium text-lg leading-7 mb-3">
                  Quick Links
                </h6>
                <ul className="flex flex-col gap-3 text-[14px] leading-[150%] font-normal">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-gray-300 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-gray-300 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="hover:text-gray-300 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-300 transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-medium text-lg leading-7 mb-3">Contact</h6>
                <ul className="flex flex-col gap-3 text-[15px] leading-[150%] font-normal">
                  <li className="flex items-center gap-2">
                    <Sms variant="Outline" />
                    <a
                      href="mailto:hello@iphive.com"
                      className="hover:text-gray-300 transition-colors"
                    >
                      hello@iphive.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <CallCalling variant="Outline" />
                    <a
                      href="tel:+2340123456789"
                      className="hover:text-gray-300 transition-colors"
                    >
                      +234 (0) 123 456 789
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Location variant="Outline" />
                    <span>Obafemi Awolowo University, Nigeria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:hidden items-start gap-6 mt-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policies
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookies Policies
            </a>
          </div>
          <div className="mt-8">
            <hr className="text-[#F1F2F3]" />
            <div className="flex items-center justify-center lg:justify-between text-sm font-normal mt-3">
              <p>© 2025 IP-HIVE. OMobile. All rights reserved.</p>
              <div className="hidden lg:flex items-center gap-6">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policies
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Cookies Policies
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <WaitlistModals
        isWaitlistOpen={isWaitlistOpen}
        isSuccessOpen={isSuccessOpen}
        isErrorOpen={isErrorOpen}
        onSuccess={showSuccess}
        onError={showError}
        onRetry={retryWaitlist}
        onClose={closeAllModals}
      />
    </>
  );
};

export default Footer;
