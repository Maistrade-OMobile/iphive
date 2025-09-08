import { CloseSquare, TickCircle } from 'iconsax-reactjs';

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <div
          className="cursor-pointer hover:bg-gray-100 rounded-md p-1 transition-colors duration-200"
          onClick={onClose}
        >
          <CloseSquare size="32" color="#919BA1" variant="Outline" />
        </div>
      </div>
      <div className="mx-auto text-center mt-10">
        <div className="w-20 h-20 p-3 mx-auto rounded-full flex items-center justify-center bg-[#30C10B12]">
          <TickCircle size="42" color="#30C10B" variant="Outline" />
        </div>
        <div className="mt-4">
          <h5 className="text-[#232729] text-[28px] lg:text-3xl leading-12 font-bold">
            You&apos;re on the list!
          </h5>
          <p className="text-[#919BA1]">
            Thank you for joining the IP-HIVE waitlist. We&apos;ll notify you as
            soon as we launch.
          </p>
          <button
            className="bg-primary text-white rounded-lg py-3 px-5 text-[16px] leading-6 font-medium cursor-pointer mt-10 transition-colors duration-300 hover:bg-[#300B22] w-full mb-8"
            onClick={onClose}
          >
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
