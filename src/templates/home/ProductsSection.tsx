import * as _ from "./home.style";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ProductCard from "@/components/card/ProductCard.tsx";

import { useScrollFadeIn, AnimatedProductsType } from "@/hooks/useScrollFadeIn";

import {
  IMG_SUB_BANNER_1,
  IMG_SUB_BANNER_2,
  IMG_SUB_BANNER_3,
  IMG_SUB_BANNER_4,
  IMG_SUB_BANNER_5,
  IMG_SUB_BANNER_6,
} from "@/constants/images";

export default function ProductsSection() {
  const animatedProducts: AnimatedProductsType = useScrollFadeIn("up");
  const data = [
    {
      id: 1,
      img: IMG_SUB_BANNER_1,
      productName: "Enchanted Ballet",
      price: 1930,
      author: "Pawel Czerwinski",
      date: "2020.01.05",
    },
    {
      id: 2,
      img: IMG_SUB_BANNER_2,
      productName: "Gentleman's Reflection",
      price: 729,
      author: "Christopher Baker",
      date: "2019.06.22",
    },
    {
      id: 3,
      img: IMG_SUB_BANNER_3,
      productName: "Yogic Serenity",
      price: 1126,
      author: "Olivia Anderson",
      date: "2022.09.07",
    },
    {
      id: 4,
      img: IMG_SUB_BANNER_4,
      productName: "Fearless Horizon",
      price: 2109,
      author: "Isabella Mitchell",
      date: "2023.11.05",
    },
    {
      id: 5,
      img: IMG_SUB_BANNER_5,
      productName: "Embracing Serene Sunset",
      price: 1780,
      author: "Sophia Davis",
      date: "2022.10.28",
    },
    {
      id: 6,
      img: IMG_SUB_BANNER_6,
      productName: "Whispers of Blooming Beauty",
      price: 687,
      author: "Benjamin Turner",
      date: "2022.10.21",
    },
  ];

  return (
    <_.ProdSection>
      <_.ProductsList {...animatedProducts}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 2,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          navigation={true}
          mousewheel={true}
          modules={[EffectCoverflow, Navigation, Mousewheel]}
          initialSlide={2}
          className="mySwiper"
        >
          {data.map((prod) => (
            <SwiperSlide key={prod.id}>
              <_.ProductPoster>
                <ProductCard data={prod} />
              </_.ProductPoster>
            </SwiperSlide>
          ))}
        </Swiper>
      </_.ProductsList>
    </_.ProdSection>
  );
}
