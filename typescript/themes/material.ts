import {ColorSet} from '../colors/set';

export class PrimaryColorSet implements ColorSet {
  container() {
    return '#fff';
  }

  highEmphasis() {
    return '#000';
  }

  mediumEmphasis() {
    return '#666'
  }

  lowEmphasis() {
    return '#999';
  }

  accent() {
    return '#6200ee';
  }
}

export class DisabledColorSet implements ColorSet {
  container() {
    return '#ccc';
  }

  highEmphasis() {
    return '#333';
  }

  mediumEmphasis() {
    return '#666';
  }

  lowEmphasis() {
    return '#999';
  }

  accent() {
    return '#333';
  }
}
