import Modal from '../common/Modal';
import SuccessModal from '../waitlist/SuccessModal';
import ErrorModal from '../waitlist/ErrorModal';
import WaitlistForm from './WaitlistForm';

interface WaitlistModalsProps {
  isWaitlistOpen: boolean;
  isSuccessOpen: boolean;
  isErrorOpen: boolean;
  onSuccess: () => void;
  onError: () => void;
  onRetry: () => void;
  onClose: () => void;
}

const WaitlistModals = ({
  isWaitlistOpen,
  isSuccessOpen,
  isErrorOpen,
  onSuccess,
  onError,
  onRetry,
  onClose,
}: WaitlistModalsProps) => {
  return (
    <>
      {/* Waitlist Modal */}
      <Modal
        isOpen={isWaitlistOpen}
        onClose={onClose}
        contentClassName="bg-white rounded-[8px] py-6 px-10 h-[90vh] w-[90%] md:w-[35%] shadow-[0px_4px_6px_3px_#3333331A]"
      >
        <WaitlistForm
          onClose={onClose}
          onSuccess={onSuccess}
          onError={onError}
          onRetry={onRetry}
        />
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessOpen}
        onClose={onClose}
        contentClassName="bg-white rounded-[8px] py-6 px-10 h-auto w-[90%] md:w-[38%] shadow-[0px_4px_6px_3px_#3333331A]"
      >
        <SuccessModal onClose={onClose} />
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={isErrorOpen}
        onClose={onClose}
        contentClassName="bg-white rounded-[8px] py-6 px-10 h-auto w-[90%] md:w-[38%] shadow-[0px_4px_6px_3px_#3333331A]"
      >
        <ErrorModal onClose={onClose} onRetry={onRetry} />
      </Modal>
    </>
  );
};

export default WaitlistModals;
