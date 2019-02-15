import {Color, ColorSet} from './set';

export interface ColorMap {};

export abstract class SurfaceColorMap implements ColorMap {
  protected colorSet: ColorSet;

  constructor(colorSet: ColorSet) {
    this.colorSet = colorSet;
  }
}

export abstract class ContainerColorMap extends SurfaceColorMap {
  container(): Color {
    return this.colorSet.container();
  }
}
