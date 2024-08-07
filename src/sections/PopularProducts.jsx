import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
        <div className="felx flex-col justify-start gap-5 ">
            <h2 className="text-4xl font-palanquin font-bold"> 
            Our <span className="text-customcolor">Popular</span> Products</h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Explore the best racket suited to your playing style</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1 sm:gap-4 gap-14">

        </div>
    </section>
)
}

export default PopularProducts