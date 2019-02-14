import {ColorMap, Color} from './colors';
import {Button, Component} from './component';

export interface ButtonMapping {
  ink(): Color;
}

export interface ContainedButtonMapping extends ButtonMapping {
  outline(): Color;
}

export class FilledButtonMapping extends ColorMap implements ButtonMapping {
  ink() {
    return this.colorSet.accent();
  }
}

export class OutlinedButtonMapping extends ColorMap implements ContainedButtonMapping {
  ink() {
    return this.colorSet.accent();
  }
  outline() {
    return this.colorSet.lowEmphasis();
  }
}

export class FilledButton extends Component implements Button {
  disabled(colorSet:)
}
