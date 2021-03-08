interface Values {
  xs: number | string;
  sm: number | string;
  md: number | string;
  basic: number | string;
  lg: number | string;
  xl: number | string;
}
type Key = keyof Values;

export default class CreateFontSize {
  values: Values = {
    xs: 10.5,
    sm: 13,
    basic: 16,
    md: 24,
    lg: 32,
    xl: 40
  };

  unit = "px";

  keys: Key[] = ["xs", "sm", "md", "lg", "xl"];

  fontSize(key?: Key) {
    if (key) {
      return typeof this.values[key] === "number"
        ? `${this.values[key]}${this.unit}`
        : this.values[key];
    }
    return typeof this.values.basic === "number"
      ? `${this.values.basic}${this.unit}`
      : this.values.basic;
  }
}
