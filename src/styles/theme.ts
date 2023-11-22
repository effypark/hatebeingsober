import { DefaultTheme, keyframes } from "styled-components";

export const KEYFRAMES = {
  smoothAppear: keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `,
};

export const MIXINS = {
  // flex
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = "absolute") => {
    if (type === "absolute" || type === "fixed")
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

export const theme: DefaultTheme = {
  mixins: MIXINS,
  keyframes: KEYFRAMES,
  color: {
    blue: "#00398f",
    blueOp50: "#00398f50",
    orange: "#ff7439",
    blueLight: "#dee8f9",
    redLight: "#fde9e9",
    red: "#eb5757",
    orangeLight: "#fff9f1",

    /* Basic Color */
    black: "#000000",
    darkGray: "#1A1A1A",
    secondaryBlack: "#444444",
    tertiaryBlack: "#999999",
    iconGray: "#aaaaaa",
    borderGray: "#dddddd",
    disabledGray: "#ebebeb",
    bgGray: "#f4f4f4",
    white: "#ffffff",
    yellow: "#fbea53",
    lightGreen: "#b4e89b",
    deepRed: "#cc4545",

    /* System Color */
    colorNegativeRed: "#eb5757",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
