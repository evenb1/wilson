import ComingSoonCard from "../components/ComingSoonCard"
import { comingSoon } from "../constants"

const SpecialOffers = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1 sm:gap-4 gap-14 ">
          {comingSoon.map((comings)=>(
                      <ComingSoonCard key={comings.name} {...comings}/>

          ))}
      </div>
    </section>
  )
}

export default SpecialOffers