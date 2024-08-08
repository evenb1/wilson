import { DirectionAwareHover } from "../components/ui/direction-aware-hover"
import { comingSoon } from "../constants"

const SpecialOffers = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1 sm:gap-4 gap-14 ">
          {comingSoon.map((coming)=>(
                      <DirectionAwareHover key={coming.name} {...coming}/>

          ))}
      </div>
    </section>
  )
}

export default SpecialOffers