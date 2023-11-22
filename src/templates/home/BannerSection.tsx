import * as _ from "./home.style";

import { useScrollFadeIn, AnimatedProductsType } from "@/hooks/useScrollFadeIn";

import {
  IMG_SUB_BANNER_1,
  IMG_SUB_BANNER_2,
  IMG_SUB_BANNER_3,
} from "@/constants/images";

import { MARKETING_MAIN_TEXT, MARKETING_SUB_TEXT } from "@/constants/Text";

export default function ProductsList() {
  const animatedBanner: AnimatedProductsType = useScrollFadeIn("up");
  const animatedMainText: AnimatedProductsType = useScrollFadeIn("right");
  const animatedSubText: AnimatedProductsType = useScrollFadeIn("left");

  return (
    <_.Section>
      <_.Container {...animatedBanner}>
        <_.BannerContainer>
          <_.SubBannerImg
            src={IMG_SUB_BANNER_1}
            alt="SUB"
            width={300}
            height={400}
          />
          <_.SubBannerImg
            src={IMG_SUB_BANNER_2}
            alt="SUB"
            width={300}
            height={400}
          />
          <_.SubBannerImg
            src={IMG_SUB_BANNER_3}
            alt="SUB"
            width={300}
            height={400}
          />
        </_.BannerContainer>
      </_.Container>
      <_.TextBox {...animatedMainText}>
        <_.MainText>{MARKETING_MAIN_TEXT}</_.MainText>
      </_.TextBox>
      <_.TextBox {...animatedSubText}>
        <_.SubText>{MARKETING_SUB_TEXT}</_.SubText>
      </_.TextBox>
    </_.Section>
  );
}
