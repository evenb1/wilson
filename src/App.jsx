import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffers from "./sections/SpecialOffers";
import SuperQuality from "./sections/SuperQuality";
import PopularProducts from "./sections/PopularProducts";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r '>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding-x  max-sm:p-0'>
        <SuperQuality />
      </section>
      
      <section className='padding-x py-0'>
        <SpecialOffers />
      </section>
      
      <section className='mt-10 sm:py-32 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x m-0 padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
