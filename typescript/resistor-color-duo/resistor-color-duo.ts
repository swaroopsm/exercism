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

export function decodedValue(colors: Color[]) {
  return Number(
    colors
      .slice(0, 2)
      .map((color) => colorCode(color))
      .join(""),
  );
}
