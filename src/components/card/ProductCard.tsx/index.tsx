import { useState } from "react";

import styled from "styled-components";
import Image from "next/image";

interface IProductCardProps {
  data: {
    id: number;
    img: string;
    productName: string;
    price: number;
    author: string;
    date: string;
  };
}

interface IStyled {}

export default function ProductCard({ data }: IProductCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOffHover = () => {
    setIsHovered(false);
  };

  const handleOnHover = () => {
    setIsHovered(true);
  };

  return (
    <Card onMouseEnter={handleOnHover} onMouseLeave={handleOffHover}>
      <ProductImg src={data.img} alt="img" width={350} height={450} />
      {isHovered && (
        <InfoBox>
          <h3>{data.productName}</h3>
          <p>Author. {data.author}</p>
        </InfoBox>
      )}
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  pointer: cursor !important;

  &:hover {
    opacity: 0.6;
    transition: all 1s;
  }
`;

const ProductImg = styled(Image)`
  object-fit: cover;
`;

const InfoBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  width: 220px;
  position: absolute;
  bottom: 80px;
  left: 20%;
  padding: 6px 10px;
  z-index: 8;
  opacity: 1;
  border-radius: 6px;
  transition: all 0.5s ease 0s;
  background-color: ${({ theme }) => theme.color.darkGray};

  h3 {
    font-weight: bold;
    font-size: 12px;
  }

  p {
    font-size: 11px;
  }
`;
