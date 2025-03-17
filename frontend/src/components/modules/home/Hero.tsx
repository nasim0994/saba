import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const sliders = [
  {
    _id: 1,
    url: "https://dhz27qxctdo0r.cloudfront.net/images/scale/2x/80ac214e11c07d7b9161f6c280eaa1ec.webp",
    link: "#",
  },
  {
    _id: 2,
    url: "https://dhz27qxctdo0r.cloudfront.net/images/scale/2x/99fb8f996bd4211c4f918b27e04f61a7.webp",
    link: "#",
  },
];

export default function Hero() {
  return (
    <section className="pt-2 sm:pt-4">
      <div className="container">
        <div className="relative h-40 sm:h-80 lg:h-[450px]">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper h-full w-full rounded-2xl overflow-hidden"
          >
            {sliders?.map((banner) => (
              <SwiperSlide key={banner._id}>
                <Link to={banner?.link}>
                  <img
                    src={banner?.url}
                    alt="banner"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
