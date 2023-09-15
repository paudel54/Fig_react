import Button from "../button/Button";
import HeroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center flex-col">
        {/* Hero text */}
        <h1 className="text-[32px] lg:text-[62px] mb-4 text-white text-center">
          A Digital Product Design Agency
        </h1>
        <p className="text-white max-w-[440px] leading-relaxed mb-8">
          We are Creative and Professional Digital Agency
        </p>
        <Button text="GET STARTED" className="mb-4" />
        {/* Hero Image  */}
        <div className="flex-1 -mt-2">
          <img src={HeroImg} alt="banner" className="h-[46rem]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
