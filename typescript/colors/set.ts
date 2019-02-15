export type Color = string;

export interface ColorSet {
  container(): Color;
  accent(): Color;
  highEmphasis(): Color;
  mediumEmphasis(): Color;
  lowEmphasis(): Color;
}
