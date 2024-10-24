enum ColorCode {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

type Color = keyof typeof ColorCode;

export const colorCode = (color: Color) => {
  return ColorCode[color];
};

export const COLORS = Object.keys(ColorCode).filter((key) =>
  isNaN(Number(key)),
);
