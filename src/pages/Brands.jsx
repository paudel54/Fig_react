import Sponcer1 from "../assets/img/1.png";
import Sponcer2 from "../assets/img/2.png";
const Brands = () => {
  return (
    <div className="py-[8rem]">
      <h1 className="text-[#00A077] mb-4">BRANDS</h1>
      <h1 className="text-4xl font-medium leading-smooth mb-4 text-[#3B3E43]">
        We work with thousands of the world's <br /> leading Brands
      </h1>
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={Sponcer2} alt="sponcers" />
        <img src={Sponcer1} alt="sponcers" />
      </div>
      <p className="text-[#424A4D]">
        You are going to be in good company. We work with <br /> world's leading
        brands.
      </p>
    </div>
  );
};

export default Brands;
