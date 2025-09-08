'use client';
import { ArrowRight } from 'iconsax-reactjs';
import Container from '../shared/Container';
import { useWaitlistModal } from '@/hooks/useWaitListModal';
import WaitlistModals from '../waitlist';

const HeroSection = () => {
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
      <section id="home">
        <Container>
          <div className="flex flex-col lg:flex-row  items-center justify-center gap-12 mt-10">
            {/*.......... Hero text..... */}
            <div className="w-full lg:w-[50%]">
              <span className="bg-[#E9DCE4] text-[#501239] font-normal py-2 px-3 text-sm leading-5 rounded-[20px]">
                Secure. Verified. Connected.
              </span>
              <h1 className="text-[32px] lg:text-5xl font-medium leading-[48px] lg:leading-[72px] text-[#2F3437] my-4">
                Protect Your Ideas. Discover Innovations. All in One{' '}
                <span className="text-primary font-bold">Platform.</span>
              </h1>
              <p className="text-[#75828A] text-[16px] lg:text-xl leading-6 lg:leading-7 font-normal pr-0 lg:pr-2">
                IP-HIVE makes filing for intellectual property easy, secure, and
                accessible — helping innovators protect their ideas while giving
                investors access to verified inventions.
              </p>
              <div className="mt-12">
                <div
                  className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium inline-flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-[#300B22]"
                  onClick={openWaitlist}
                >
                  <p>Join Waitlist</p>
                  <ArrowRight size="24" />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="/images/innovators.svg"
                    alt="innovators"
                    className="w-[70px]"
                  />
                  <h4 className="text-[#232729] text-sm leading-5">
                    1,000+ Innovators and Investors have joined the wait-list
                  </h4>
                </div>
              </div>
            </div>
            {/*.......... Hero Banner...... */}
            <img
              src="/images/hero.png"
              alt="hero-banner"
              className="w-full lg:w-[50%]"
            />
          </div>
        </Container>
      </section>
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

export default HeroSection;
