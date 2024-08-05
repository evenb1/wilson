import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { FlipWords } from "../components/ui/flip-words"

const Hero = () => {
    const words = ["GAME.", "SHOW.", "PLAY.", "VIBE."];
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center
      min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col items-start w-full
        max-xl:padding-x pt-28">
            <div className="text-4xl mx-auto text-black font-bold">
      BOLD NEW COLORS. <br />
      WHOLE NEW 
        <FlipWords words={words} className="text-customcolor" /> 
        
      </div>
            <p>Welcome to Wilson Tennis, 
                the industry leader in premium tennis equipment 
                for over a century.</p>
            <Button label="Shop Now" iconURL={arrowRight}/>
            
      
    </div>
    </section>

)
}

export default Hero