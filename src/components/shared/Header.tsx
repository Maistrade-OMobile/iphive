'use client';

import { useWaitlistModal } from '@/hooks/useWaitListModal';
import WaitlistModals from '../waitlist';
const Header = () => {
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
      <header className="flex items-center justify-between gap-3 px-[20px] lg:px-[78px] py-5 bg-[#F0E8ED]">
        <img
          src="/images/logo.svg"
          alt="Iphive-logo"
          className="w-[98px] lg:w-auto"
        />
        <button
          className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium cursor-pointer transition-colors duration-300 hover:bg-[#300B22]"
          onClick={openWaitlist}
        >
          <span>Join Waitlist</span>
        </button>
      </header>
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

export default Header;
