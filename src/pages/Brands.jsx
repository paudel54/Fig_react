import Sponcer1 from "../assets/img/1.png";
import Sponcer2 from "../assets/img/2.png";
const Brands = () => {
  return (
    <div className=" py-[2rem] lg:py-[8rem] flex flex-col items-center justify-center">
      <h1 className="text-[#00A077] mb-4 text-sm lg:text-md">BRANDS</h1>
      <h1 className="text-xl lg:text-4xl text-center font-medium leading-smooth mb-4 text-[#3B3E43]">
        We work with thousands of the world's <br /> leading Brands
      </h1>
      <div className="flex flex-col items-center justify-center mb-4 mx-[1rem] lg:mx-[0rem]">
        <img src={Sponcer2} alt="sponcers" />
        <img src={Sponcer1} alt="sponcers" />
      </div>
      <p className="text-[#424A4D] text-center text-sm lg:text-lg mt-6 lg:mt-0">
        You are going to be in good company. We work with <br /> world's leading
        brands.
      </p>
    </div>
  );
};

export default Brands;
