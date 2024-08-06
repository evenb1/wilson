import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { FlipWords } from "../components/ui/flip-words";
import Stats from "../components/Stats";
import {bigImage1} from "../assets/images";
import {bigImage2} from "../assets/images";
import {bigImage3} from "../assets/images"; // The image to display on hover

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const words = ["GAME.", "SHOW.", "PLAY.", "VIBE."];

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col items-start w-full max-xl:padding-x pl-10 pt-40">
        <div className="text-4xl ml-0 mx-auto max-sm:text-[50px]  text-black font-bold">
          BOLD NEW COLORS. <br />
          WHOLE NEW
          <FlipWords words={words} className="text-customcolor" />
        </div>
        <p className="text-slate-gray mt-2 mb-6">
          The industry leader in premium tennis equipment for over a century.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <Stats />
      </div>
      <div
        className="relative flex-1 flex justify-center xl:m-0 
         lg:justify-end  min-lg:m-0 lg:mt-[-550px]  
         items-center xl:min-h-screen md:justify-end md:mt-[-550px]"
        
      >
        <img src={isHovered ? bigImage3 : bigImage2} alt="" 
        className="object-contain w-[900px] h-[500px]
         max-sm:h-[200px] relative xl:pr-20 lg:w-[700px] lg:h-[600px]
          md:w-[400px] md:h-[300px] max-sm:hidden" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}/>
          <img src={bigImage1} className="w-full block sm:hidden " width={700} height={600} alt="" />
      </div>
      
    </section>
  );
};

export default Hero;
