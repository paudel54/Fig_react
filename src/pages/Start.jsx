import Button from "../components/button/Button";
import FootImg from "../assets/img/footer.png";
import FootVector from "../assets/img/Vector.png";

const Start = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-l from-[#35D3FF] to-[#A963FB]">
      <div className="flex items-center justify-center gap-40 py-[10rem]">
        <div className="text-start">
          <h1 className="text-[#FFFFFF] mb-4">START WITH US</h1>
          <h1 className="text-[3rem] font-medium text-white mb-4">
            Start Working <br /> Faster Today
          </h1>
          <p className="text-white mb-8">
            We know the best solution for all of your <br /> business ideas and
            we can help you solve <br /> all business problems
          </p>
          <Button text="GET STARTED" />
        </div>
        <div className="relative">
          <img src={FootImg} alt="banner" className="" />
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
