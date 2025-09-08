'use client';
import Container from '../shared/Container';
import SectionHeader from '../common/SectionHeader';
import { useWaitlistModal } from '@/hooks/useWaitListModal';
import WaitlistModals from '../waitlist';

const YourIdeaSection = () => {
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
      <section className="bg-[#F0E8ED] py-10 flex flex-col justify-center items-center text-center">
        <Container>
          <>
            <SectionHeader
              title="Your Idea Deserves Protection. Your Investment Deserves Opportunities."
              subtitle="IP-HIVE connects innovation to opportunity. Whether you're creating or investing, we make it safe and simple."
            />
            <button
              className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium cursor-pointer mt-15 transition-colors duration-300 hover:bg-[#300B22]"
              onClick={openWaitlist}
            >
              <span>Join the Waitlist Now</span>
            </button>
          </>
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

export default YourIdeaSection;
