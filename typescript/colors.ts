export type Color = string;

export interface ColorSet {
  container(): Color;
  highEmphasis(): Color;
  mediumEmphasis(): Color;
  lowEmphasis(): Color;
  accent(): Color;
}

export abstract class ExtrapolatedColorSet implements ColorSet {
  abstract container(): Color;
  abstract highEmphasis(): Color;

  private blend(surface: Color, container: Color, amount: number): Color {
    return surface + container + amount;
  }

  mediumEmphasis() {
    return this.blend(this.highEmphasis(), this.container(), 0.6);
  }

  lowEmphasis() {
    return this.blend(this.highEmphasis(), this.container(), 0.4);
  }

  accent() {
    return this.highEmphasis();
  }
}

export class ColorMap {
  protected colorSet: ColorSet;

  constructor(colorSet: ColorSet) {
    this.colorSet = colorSet;
  }

  static withColorSet(colorSet: ColorSet): ColorMap {
    return new ColorMap(colorSet);
  }

  getContainer(): Color {
    return this.colorSet.container();
  }
}
