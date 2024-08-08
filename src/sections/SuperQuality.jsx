import { tennisCollection } from "../assets/images";

const SuperQuality = () => {
  return (
    <section 
      className="h-[444px] max-sm:h-[300px] bg-cover bg-no-repeat bg-center shadow-3xl shadow-gray-300"
      style={{
        backgroundImage: `url(${tennisCollection})`,
        backgroundPosition: "center", 
        backgroundSize: "cover",      
        maxWidth: "100%",
      }}
    >
      <div className="flex items-center justify-end pt-[55px] h-full pr-16 text-white text-left max-sm:flex-col max-sm:justify-center max-sm:pt-0 max-sm:pl-4 max-sm:pr-4">
        <div className="shadow-inner text-center max-sm:w-full">
          <h1 className="font-extrabold text-[37px] leading-10 font-Archivo text-opacity-90 max-sm:text-[20px] max-sm:leading-6">
            UNLEASH YOUR POTENTIAL, <br /> REDEFINE YOUR LIMITS.
          </h1>
          <p className="mt-2 font-montserrat max-sm:mt-1">
            Explore our tennis collection
          </p>
          <button 
            className="relative h-12 w-40 mt-3 overflow-hidden border border-black shadow-3xl max-sm:w-32 max-sm:h-10 max-sm:mt-2
            before:ease before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
          >
            <span className="relative z-10 font-montserrat">Our Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
