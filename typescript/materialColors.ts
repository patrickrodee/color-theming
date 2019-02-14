import {Color, ColorSet} from './colors';

const white: Color = '#fff';
const black: Color = '#000';
const midBlack: Color = '#666';
const lowBlack: Color = '#aaa';
const primary: Color = '#6200ee';
const secondary: Color = '#018786';

export class MaterialNeutral implements ColorSet {
  container() {
    return white;
  }

  highEmphasis() {
    return black;
  }

  mediumEmphasis() {
    return midBlack;
  }

  lowEmphasis() {
    return lowBlack;
  }

  accent() {
    return primary;
  }
}

export class MaterialSecondaryNeutral extends MaterialNeutral {
  accent() {
    return secondary;
  }
}
