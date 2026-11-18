import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router";
import heroSlides from "../../data/heroSlides";

const HeroSlider = () => {
  return (
    <section className="w-full p-2">
      {/* Parent Relative Container */}
      <div className="relative">
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={heroSlides.length > 1}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                className="
                  h-80
                  w-full
                  rounded-xl
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                "
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Absolute Content */}
        <div className="absolute bottom-[20%] left-[10%] z-10">
          <Link
            to="/"
            className="btn px-3 py-1 text-blue-700 border-none shadow-2xl rounded-full bg-white"
          >
            Explore Coupons
            <FaArrowRightLong size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
