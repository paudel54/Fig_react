import Button from "../components/button/Button";
import FootImg from "../assets/img/footer.png";
import FootVector from "../assets/img/Vector.png";

const Start = () => {
  return (
    <div className="h-90vh w-screen bg-gradient-to-l from-[#35D3FF] to-[#A963FB]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-40 py-[2rem] lg:py-[10rem]">
        <div
          className="text-start "
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="2000"
        >
          <h1 className="ml-2 md:ml-0  text-[#FFFFFF] lg:mb-4 opacity-50">
            START WITH US
          </h1>
          <h1 className="ml-2 md:ml-0 text-[2rem] lg:text-[3rem] font-medium text-white mb-4">
            Start Working <br className="hidden lg:inline" /> Faster Today
          </h1>
          <p className="ml-2 md:ml-0  text-white mb-6 lg:mb-8 text-sm md:text-base lg:text-lg">
            We know the best solution for all of your <br /> business ideas and
            we can help you solve <br /> all business problems.
          </p>
          <Button text="GET STARTED" className=" ml-2 md:ml-0" />
        </div>
        {/* Requires a fix of z-index  */}
        <div
          className="relative -mt-10 lg:mt-0 z-10"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="2000"
        >
          <img src={FootImg} alt="banner" className="z-30 relative" />
          <img
            src={FootVector}
            alt="banner"
            className="absolute -top-20 -right-11 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
