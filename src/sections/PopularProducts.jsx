import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
        <div className="felx flex-col">
            <h2 className="text-4xl font-palanquin font-bold"> 
            Our <span className="text-customcolor">Popular</span> Products</h2>
            <p>Explore the best racket suited to your playing style</p>
        </div>
    </section>
)
}

export default PopularProducts