import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffers from "./sections/SpecialOffers";
import SuperQuality from "./sections/SuperQuality";
import PopularProducts from "./sections/PopularProducts";
import Nav from "./components/Nav";
import CartSidebar from "./components/CartSidebar"; // Cart sidebar component
import { CartProvider } from './context/CartContext'; // Import the Cart Context Provider

const App = () => {
  return (
    <CartProvider> {/* Wrapping your app with CartProvider */}
      <main className='relative'>
        <Nav /> {/* Navbar component */}

        <section className='xl:padding-l wide:padding-r'>
          <Hero />
        </section>
        
        <section className='padding'>
          <PopularProducts />
        </section>
        
        <section id="collection" className='padding-x max-sm:p-0'>
          <SuperQuality />
        </section>

        <section className='padding-x py-0'>
          <SpecialOffers />
        </section>

        <section className='mt-20 bg-gray-100 sm:py-32 w-full'>
          <Subscribe />
        </section>

        <section className='bg-black padding-x pb-8'>
          <Footer />
        </section>

        {/* Cart Sidebar */}
        <CartSidebar /> {/* Include Cart Sidebar component here */}
      </main>
    </CartProvider>
  );
}

export default App;
