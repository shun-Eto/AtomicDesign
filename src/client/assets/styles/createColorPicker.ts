interface Color {
  root: string;
  500?: string;
}
interface Colors {
  black: Color;
  white: Color;
  grey: Color;
  orange: Color;
}
export default class CreateColorPicker {
  colors: Colors = {
    black: { root: "rgba(0, 0, 0, 1)" },
    white: { root: "rgba(255, 255, 255, 1)" },
    grey: { root: "rgba(33, 33, 33, 1)", 500: "rgba(158, 158, 158, 1)" },
    orange: { root: "rgba(233, 69, 44, 1)" }
  };

  defaultColors = { ...this.colors };

  constructor(colors?: Colors) {
    this.colors = { ...this.defaultColors, ...colors };
  }

  colorPicker(
    color: keyof Colors,
    option?: {
      code?: keyof Color;
      opacity?: number;
    }
  ): string {
    if (option?.code || option?.opacity) {
      const code = option?.code ? option.code : "root";
      const opacity = option.opacity ? option.opacity : "1";

      const targetColor = this.colors[color][code]
        ? this.colors[color][code]
        : this.colors[color].root;

      return targetColor
        ? targetColor.replace("1)", `${opacity})`)
        : this.colors[color].root;
    }
    return this.colors[color].root;
  }
}
