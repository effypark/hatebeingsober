import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  height: 940px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Container = styled.div`
  padding: 20px 120px;
`;

export const BannerContainer = styled.div`
  position: relative;

  img:nth-child(1) {
    top: 20px;
  }

  img:nth-child(2) {
    top: 500px;
    left: 160px;
  }

  img:nth-child(3) {
    top: 300px;
    left: 400px;
  }
`;

export const SubBannerImg = styled(Image)`
  position: absolute;
`;

export const TextBox = styled.div``;

export const MainText = styled.p`
  position: absolute;
  right: 0;
  margin: 0;
  padding: 0px 40px 0 460px;
  font-size: 14px;
`;

export const SubText = styled.p`
  position: absolute;
  right: 0;
  margin: 0;
  padding: 500px 40px 0 700px;
  font-size: 14px;
`;

export const ProdSection = styled.section`
  position: relative;
  height: 100vh;
  padding: 20px 120px;
  z-index: 2;
  background-color: #313131;
`;

export const ProductsList = styled.div`
  padding: 80px 0;
`;

export const ProductPoster = styled.div`
  -webkit-box-reflect: below 20px
    linear-gradient(transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
`;
