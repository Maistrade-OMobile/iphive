import { Flash, Global, Security } from 'iconsax-reactjs';
import Container from '../shared/Container';
import SectionHeader from '../common/SectionHeader';

const values = [
  {
    icon: Global,
    title: 'Global Network',
    text: 'Connect with innovators, investors, and institutions worldwide through our comprehensive platform',
  },
  {
    icon: Security,
    title: 'Secure and Trusted',
    text: 'Industry-leading security measures protect your intellectual property throughout the entire process.',
  },
  {
    icon: Flash,
    title: 'Fast and Efficient',
    text: 'Streamlined processes reduce time-to-market and accelerate your innovation journey.',
  },
];
const WhySection = () => {
  return (
    <section id="features">
      <Container>
        <>
          <SectionHeader
            title="Why Choose Us"
            subtitle="	Our unique value propositions make us the preferred platform for
							innovation management"
          />
          <div className="flex flex-col lg:flex-row justify-center gap-8 gap-y-12 mt-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  className="text-center w-full lg:w-[30%]"
                  key={value.title}
                >
                  <div className="rounded-full mx-auto w-20 lg:w-28 h-20 lg:h-28 bg-primary flex items-center justify-center">
                    <Icon
                      className="text-white"
                      size="42"
                      variant={'Outline'}
                    />
                  </div>
                  <h5 className="text-[#2F3437] leading-7 lg:leading-[48px] text-[20px] lg:text-[30px] font-medium mt-3 ">
                    {value.title}
                  </h5>
                  <p className="font-normal text-[#919BA1] text-[16px] lg:text-lg leading-6 lg:leading-7">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      </Container>
    </section>
  );
};

export default WhySection;
