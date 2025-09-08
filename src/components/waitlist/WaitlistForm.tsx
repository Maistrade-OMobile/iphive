import { ArrowDown2 } from 'iconsax-reactjs';
import { useState } from 'react';
import * as yup from 'yup';

interface WaitlistFormProps {
  onClose: () => void;
  onRetry: () => void;
  onSuccess: () => void;
  onError?: () => void;
}
interface FormData {
  fullName: string;
  email: string;
  userRole: string;
  receiveUpdates: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  userRole?: string;
}

const validationSchema = yup.object({
  fullName: yup.string().required('Please enter your full name'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),
  userRole: yup.string().required('Please select a role'),
});

const WaitlistForm = ({ onClose, onSuccess, onError }: WaitlistFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    userRole: '',
    receiveUpdates: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.userRole !== '';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});

      console.log('Form submitted:', formData);

      // Simulate API call delay for testing purpose
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Test failure when email contains "test" for testing purpose
      if (formData.email.toLowerCase().includes('test')) {
        throw new Error('Simulated API failure for testing');
      } else {
        onSuccess();
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path as keyof FormErrors] = err.message;
          }
        });
        setErrors(validationErrors);
      } else {
        console.error('API Error:', error);
        if (onError) {
          onError();
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex items-center justify-center -mt-10 mb-5 h-10 w-10 mx-auto rounded-full bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:bg-primary hover:shadow-xl hover:scale-110 group"
        onClick={onClose}
      >
        <span className="text-[#232729] font-bold group-hover:text-white transition-colors duration-300">
          X
        </span>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar ">
        <div className="flex items-center justify-center">
          <img src="/images/logo.svg" alt="Iphive-logo" className="w-[98px]" />
        </div>
        <div className="text-center mb-8">
          <h5 className="text-[#232729] text-[20px] lg:text-3xl leading-7 lg:leading-12 font-bold">
            Join Our Exclusive Waitlist
          </h5>
          <p className="text-[#75828A] text-[16px] lg:text-xl leading-6 lg:leading-7">
            Be the first to know when we officially launch
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className={`w-full p-3 border-2 rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out ${
                errors.fullName ? 'border-red-500' : 'border-[#C8CDD0]'
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
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
              className={`w-full p-3 border-2 rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out ${
                errors.email ? 'border-red-500' : 'border-[#C8CDD0]'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="userRole"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User Role
            </label>
            <div className="relative">
              <select
                id="userRole"
                name="userRole"
                value={formData.userRole}
                onChange={handleInputChange}
                className={`w-full p-3 border-2 rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out appearance-none ${
                  errors.userRole ? 'border-red-500' : 'border-[#C8CDD0]'
                }`}
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value="investor">Investor</option>
                <option value="innovator">Innovator</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowDown2 size="20" />
              </div>
            </div>
            {errors.userRole && (
              <p className="text-red-500 text-sm mt-1">{errors.userRole}</p>
            )}
          </div>

          <div className="flex items-start lg:items-center gap-2 ">
            <input
              type="checkbox"
              id="receiveUpdates"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleInputChange}
              className=" w-4 h-4 text-primary border-[#292D32] rounded focus:ring-purple-500 mt-[2px] lg:mt-0"
            />
            <label
              htmlFor="receiveUpdates"
              className="text-[13px] text-[#69757C] leading-5"
            >
              I want to receive email updates about IP-HIVE&apos;s launch and
              news.
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full font-medium py-3 px-4 rounded-lg cursor-pointer transition-colors ${
              isSubmitting
                ? 'bg-[#D1B7C8] text-white cursor-not-allowed'
                : isFormValid
                  ? 'bg-primary text-white hover:bg-[#300B22]'
                  : 'bg-[#D1B7C8] text-white cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
