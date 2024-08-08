import { tennisCollection } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="h-[445px] max-sm:h-[200px]  bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${tennisCollection})` }}>
      <div className="flex items-center  pt-[50px] max-sm:flex-col justify-end h-full pr-16 text-white text-left">
        <div className="shadow-inner">
          <h1 className="font-extrabold text-[37px] leading-10 font-Archivo text-opacity-90
          max-sm:text-[20px]">
            UNLEASH YOUR POTENTIAL, <br /> REDEFINE YOUR LIMITS.
          </h1>
          <p className="mt-2 font-montserrat">Explore our tennis collection</p>
          <button class="before:ease relative h-12 w-40 overflow-hidden border mt-3 border-black shadow-3xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
      <span class="relative z-10 font-montserrat">Our Collection</span>
    </button>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
