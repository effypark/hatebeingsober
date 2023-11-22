import styled from "styled-components";
import { TOP_BANNER_TEXT } from "@/constants/Text";

export default function TopBanner() {
  return <Bar>{TOP_BANNER_TEXT}</Bar>;
}

const Bar = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  position: fixed;
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 40px;
  font-size: 11px;
  z-index: 200;
  padding: 2px 10px;
  cursor: default;
`;
