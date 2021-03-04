type Breakpoint = "xs" | "sm" | "toppan" | "md" | "lg" | "xl";
interface Values {
  xs: number;
  sm: number;
  toppan: number;
  md: number;
  lg: number;
  xl: number;
}

export interface BreakpointProps {
  up: (key: Breakpoint) => string;
  down: (key: Breakpoint) => string;
  values: Values;
}

export class createBreakpoint {
  values: Values = { xs: 0, sm: 600, toppan: 720, md: 960, lg: 1280, xl: 1920 };
  unit = "px";
  step = 5;
  keys: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

  constructor(values?: Values) {
    this.values = { ...this.values, ...values };
  }

  up(key: Breakpoint): string {
    var value = this.values[key];
    return "@media (min-width:".concat(String(value)).concat(this.unit, ")");
  }

  down(key: Breakpoint): string {
    var endIndex = this.keys.indexOf(key) + 1;
    var upperbound = this.values[this.keys[endIndex]];

    if (endIndex === this.keys.length) return this.up("xs");

    var value = upperbound;
    return "@media (max-width:"
      .concat(String(value - this.step / 100))
      .concat(this.unit, ")");
  }

  breakpoint(): BreakpointProps {
    return { up: this.up, down: this.down, values: this.values };
  }
}
