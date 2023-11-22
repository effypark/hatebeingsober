import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { IMG_BANNER_1, IMG_BANNER_2, IMG_BANNER_3 } from "@/constants/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function Slide() {
  const BANNER = [IMG_BANNER_1, IMG_BANNER_2, IMG_BANNER_3];

  return (
    <Container>
      <SlideContainer>
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {BANNER.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} alt="img" key={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideContainer>
    </Container>
  );
}

const Img = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.section`
  position: fixed;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100% !important;
  animation: ${({ theme }) => theme.keyframes.smoothAppear} 1s ease-in-out
    forwards;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
