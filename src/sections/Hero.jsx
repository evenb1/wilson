import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { FlipWords } from "../components/ui/flip-words"

const Hero = () => {
    const words = ["BALLGAME.", "CHALLENGE.", "PLAY.", "COMPETITION."];
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center
      min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col items-start w-full
        max-xl:padding-x pt-28">
            <h1>
            BOLD NEW COLORS. 
            <br/>
            
            <span> </span>
            </h1>
            <p>Welcome to Wilson Tennis, 
                the industry leader in premium tennis equipment 
                for over a century.</p>
            <Button label="Shop Now" iconURL={arrowRight}/>
            <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      BOLD NEW COLORS. <br />
      WHOLE NEW 
        <FlipWords words={words} /> 
        
      </div>
    </div>
        </div>
    </section>

)
}

export default Hero