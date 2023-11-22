import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import SideNav from "../SideNav";
import { IC_CART, IC_SEARCH, IC_USER } from "@/constants/images";
import { LOGO_TEXT } from "@/constants/Text";

interface IStyled {
  clicked: boolean;
}

export default function Nav() {
  const [clickedMenu, setClickedMenu] = useState<boolean>(false);

  const handleClickMenu = () => {
    setClickedMenu((prev) => !prev);
  };

  return (
    <Bar clicked={clickedMenu}>
      <LeftContainer>
        <ButtonWrapper>
          <MenuButton clicked={clickedMenu} onClick={handleClickMenu}>
            <MenuLine />
            <MenuLine />
            <MenuLine />
          </MenuButton>
        </ButtonWrapper>

        <Logo clicked={clickedMenu}>{LOGO_TEXT}</Logo>

        <IconGroup>
          <IconButton>
            <Image src={IC_CART} alt="CART" width={30} height={30} />
          </IconButton>
          <IconButton>
            <Image src={IC_USER} alt="USER" width={30} height={30} />
          </IconButton>
          <IconButton>
            <Image src={IC_SEARCH} alt="SEARCH" width={30} height={30} />
          </IconButton>
        </IconGroup>
      </LeftContainer>
    </Bar>
  );
}

const Bar = styled.nav<IStyled>`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "center")}
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ clicked }) => (clicked ? "460px" : "100px")};
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  transition: all 0.5s ease 0s;
  background-color: ${({ theme, clicked }) => clicked && theme.color.darkGray};
  opacity: 0.8;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;

const LeftContainer = styled.div`
  width: 100px;
  height: 100vh;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  right: 0px;
  z-index: 20;
  width: 38px;
  height: 38px;
  margin: auto;
`;

const MenuButton = styled.div<IStyled>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: visible;
  cursor: pointer;
  transition: all 400ms ease-out 0ms;

  div {
    border: ${({ clicked }) =>
      clicked ? `1px solid white` : `1px solid black`};
  }

  &:hover {
    div {
      border: 1px solid white;
    }
  }

  div:nth-child(1) {
    top: 10px;
    left: 6px;
    transform: ${({ clicked }) =>
      clicked ? "translateY(9px) rotate(45deg)" : "none"};
    transition: all 400ms ease-out 0ms;
  }

  div:nth-child(2) {
    opacity: ${({ clicked }) => (clicked ? "0" : "none")};
    transition: all 400ms ease-out 0ms;
    top: 19px;
    left: 6px;
    animation-delay: 0s;
  }

  div:nth-child(3) {
    top: 28px;
    left: 6px;
    animation-delay: 0.66s;
    transform: ${({ clicked }) =>
      clicked ? "translateY(-9px) rotate(-45deg)" : "none"};
  }
`;

const MenuLine = styled.div`
  position: absolute;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  width: 24px;
  height: 2px;
  left: 0px;
  border: 1px solid black;
  border-radius: 1px;
  transition: all 400ms ease-out 0ms;
`;

const Logo = styled.div<IStyled>`
  position: absolute;
  top: 45%;
  left: -63px;
  font-size: 24px;
  font-weight: bold;
  transform: rotate(-90deg);
  color: ${({ theme, clicked }) =>
    clicked ? theme.color.white : theme.color.black};
  transition: all 400ms ease-out 0ms;
  cursor: default;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

const IconGroup = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox("column", "center", "end")};
`;

const IconButton = styled.button`
  border: none;
  background: none;
`;
