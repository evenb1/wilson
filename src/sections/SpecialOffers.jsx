import ComingSoonCard from "../components/ComingSoonCard";
import { comingSoon } from "../constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SpecialOffers = () => {
  return (
    <section >
      <div className="sm:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2} 
          centeredSlides={true}
          loop={true}
        >
          {comingSoon.map((comings) => (
            <SwiperSlide key={comings.name}>
              <ComingSoonCard {...comings} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {comingSoon.map((comings) => (
          <ComingSoonCard key={comings.name} {...comings} />
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
