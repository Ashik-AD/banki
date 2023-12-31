import CreditCard from "./credit-card";
import Button from "./ui/button";

export default function Processes() {
  return (
    <section className="flex flex-col gap-y-32">
      <div className="grid grid-cols-1 gap-y-12 gap-x-8 items-center lg:grid-cols-2">
        <article className="flex flex-col gap-6">
          <h2 className="text-[40px] font-bold">
            Design your personalized credit card.
          </h2>
          <p className="text-[#ADB2B1]">
            You have the freedom to personalize the design of your credit card,
            ensuring a truly unique experience that makes you feel extraordinary
          </p>
          <Button className="self-start">Create New Card</Button>
        </article>
        <div className="relative flex min-h-[400px] order-first lg:order-last">
          <CreditCard
            className="absolute w-11/12 max-w-[380px] gap-y-2 bg-white/10 text-xs font-bold backdrop-blur-sm z-30 -skew-x-[13deg] md:text-base right-1/2 translate-x-1/2 lg:w-full lg:max-w-[450px] lg:right-10 lg:translate-x-0"
            logoClass="w-8 lg:w-10"
            signalClass="w-6 h-6 lg:w-8 lg:h-8"
            chipClass="w-8 lg:w-10"
          />
          <CreditCard
            className="absolute w-11/12 max-w-[380px] gap-y-2 bg-skin text-xs text-black font-bold backdrop-blur-sm z-20 -skew-x-[17deg] translate-y-20 3 md:w-[380px] md:max-w-[400px] md:text-base right-1/2 translate-x-[55%] lg:w-full lg:max-w-[450px] lg:right-8 lg:translate-x-3"
            logoClass="w-8 lg:w-10"
            signalClass="w-6 h-6 lg:w-8 lg:h-8"
            chipClass="w-8 lg:w-10"
            iconColor="black"
          />
          <CreditCard
            className="absolute w-11/12 max-w-[380px] gap-y-2 bg-white text-xs text-black font-bold backdrop-blur-sm z-10 -skew-x-[17deg] translate-y-[10.75rem] md:w-[380px] md:max-w-[400px] md:text-base right-1/2 translate-x-[60%] lg:w-full lg:max-w-[450px] lg:right-0 lg:left-auto lg:translate-x-0"
            iconColor="black"
            logoClass="w-8 lg:w-10"
            signalClass="w-6 h-6 lg:w-8 lg:h-8"
            chipClass="w-8 lg:w-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-4 gap-x-8 items-center lg:grid-cols-2">
        <article className="flex flex-col gap-6 order-last">
          <h2 className="text-[40px] font-bold">
            Find the Perfect Credit Card for You
          </h2>
          <p className="text-[#ADB2B1]">
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </p>
          <Button className="self-start">Learn more</Button>
        </article>
        <div className="relative flex flex-col items-center lg:items-start">
          <CreditCard
            className="relative w-full max-w-[380px] gap-y-2 bg-white/10 text-xs font-bold backdrop-blur-sm z-30 sm:w-11/12 md:gap-y-8 md:w-full md:max-w-[420px] md:text-base lg:w-full lg:max-w-[450px]"
            logoClass="w-8 md:w-12"
            signalClass="w-6 h-6 md:w-12 md:h-12"
            chipClass="w-8 md:w-12"
          />
          <CreditCard
            className="relative w-full max-w-[380px] gap-y-2 bg-skin text-xs text-black font-bold backdrop-blur-sm z-20 skew-x-[17deg] -translate-y-16 right-0 md:w-full md:max-w-[420px] md:text-base lg:w-full lg:max-w-[450px]"
            logoClass="w-8 md:w-12"
            signalClass="w-6 h-8 md:w-12 h-12"
            chipClass="w-8 md:w-12"
            iconColor="black"
          />
        </div>
      </div>
    </section>
  );
}
