import { useState, useEffect } from "react";
import styled from "styled-components";

import { useTransition } from "@/hooks/useTransition";

export const Landing = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [shouldLander, handleTransitionEnd, triggerAnimation] =
    useTransition(showLanding);

  const generateLogos = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <Logo key={index}>HATEBEINGSOBER</Logo>
    ));
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLanding(false);
    }, 800);
  }, []);

  if (!shouldLander) {
    return null;
  }
  return (
    <Section triggerAnimation={triggerAnimation}>
      <TextBoxToLeft>{generateLogos(7)}</TextBoxToLeft>
      <TextBoxToRight>{generateLogos(7)}</TextBoxToRight>
      <TextBoxToBottom>{generateLogos(7)}</TextBoxToBottom>
    </Section>
  );
};

const Section = styled.section<{ triggerAnimation: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  transition: transform 150ms ease-out;
  ${({ triggerAnimation }) =>
    !triggerAnimation && "transform: translateY(-100%)"};
`;

const TextBox = styled.div`
  position: absolute;
  background: rgb(0, 0, 0);
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
  z-index: 30;
`;

const TextBoxToLeft = styled(TextBox)`
  top: 12%;
  padding: 6vw 0px;
  margin-left: -2.08vw;
  transform: rotate(-5deg);

  border: ${({ theme }) => `20px double ${theme.color.deepRed}`};
`;

const TextBoxToRight = styled(TextBox)`
  top: 50%;
  padding: 6vw 0px;
  margin-left: -10vw;
  transform: rotate(30deg);
  border: ${({ theme }) => `20px double ${theme.color.darkGray}`};
`;

const TextBoxToBottom = styled(TextBox)`
  top: 60%;
  padding: 6vw 0px;
  margin-left: -10vw;
  transform: rotate(3deg);
  border: ${({ theme }) => `20px double ${theme.color.poolaOrangeLight}`};
`;

const Logo = styled.div`
  animation: textLoop 0.25s linear infinite;
  padding: 0px 40px;
  color: yellow;
  font-family: Orbit-Bold;
  font-weight: bold;
  font-size: 50px;
  font-style: italic;

  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
`;
