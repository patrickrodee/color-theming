import {Color, ColorSet} from '../colors/set';
import {ContainerColorMap, SurfaceColorMap} from '../colors/map';

export class SurfaceButtonColorMap extends SurfaceColorMap {
  static withColorSet(colorSet: new () => ColorSet): SurfaceButtonColorMap {
    return new SurfaceButtonColorMap(new colorSet());
  }

  ink(): Color {
    return this.colorSet.accent();
  }

  icon(): Color {
    return this.colorSet.accent();
  }
}

export class OutlineButtonColorMap extends SurfaceButtonColorMap {
  static withColorSet(colorSet: new () => ColorSet): OutlineButtonColorMap {
    return new OutlineButtonColorMap(new colorSet());
  }

  outline(): Color {
    return this.colorSet.lowEmphasis();
  }
}

export class ContainerButtonColorMap extends ContainerColorMap {
  static withColorSet(colorSet: new () => ColorSet): ContainerButtonColorMap {
    return new ContainerButtonColorMap(new colorSet());
  }

  ink(): Color {
    return this.colorSet.accent();
  }

  icon(): Color {
    return this.colorSet.accent();
  }
}
