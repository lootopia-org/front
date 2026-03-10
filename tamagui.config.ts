import { createTamagui, createTokens } from "@tamagui/core";

const tokens = createTokens({
  color: {
    white: "#ffffff",
    black: "#000000",
    treasure: "#8B4513",
    treasureSoft: "#A0522D",
    gray: "#687076",
    grayDark: "#9BA1A6",
    danger: "#DC2626",
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
  },
  size: {
    0: 0,
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
  },
  radius: {
    0: 0,
    1: 6,
    2: 8,
    3: 12,
    4: 16,
  },
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
  },
});

const tamaguiConfig = createTamagui({
  tokens,
  themes: {
    light: {
      background: "#ffffff",
      color: "#11181C",
      accent: "#8B4513",
      muted: "#A0522D",
      border: "#687076",
      danger: "#DC2626",
    },
    dark: {
      background: "#151718",
      color: "#ECEDEE",
      accent: "#D2B48C",
      muted: "#C49A6C",
      border: "#9BA1A6",
      danger: "#F87171",
    },
  },
  defaultTheme: "light",
});

export default tamaguiConfig;

export type AppTamaguiConfig = typeof tamaguiConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppTamaguiConfig {}
}
