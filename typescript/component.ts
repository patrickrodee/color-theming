import {ColorMap} from './colors/map';

export abstract class Component<T extends ColorMap> {
  protected defaultColorMap: T;

  constructor(colorMap: T) {
    this.defaultColorMap = colorMap;
  }

  protected getColorMap(): T {
    return this.defaultColorMap;
  }
}

export abstract class DisableableComponent<T> extends Component<T> {
  protected disabledColorMap: T;
  protected isDisabled: boolean;

  constructor(colorMap: T, disabledColorMap: T) {
    super(colorMap);
    this.disabledColorMap = disabledColorMap;
  }

  set disabled(disabled) {
    this.isDisabled = disabled;
  }

  protected getColorMap(): T {
    if (this.isDisabled) {
      return this.disabledColorMap;
    }

    return super.getColorMap();
  }
}

export abstract class ActivateableComponent<T> extends Component<T> {
  protected activatedColorMap: T;
  protected isActivated: boolean;

  constructor(colorMap: T, activatedColorMap: T) {
    super(colorMap);
    this.activatedColorMap = activatedColorMap;
  }

  set activated(activated) {
    this.isActivated = activated;
  }

  protected getColorMap(): T {
    if (this.isActivated) {
      return this.activatedColorMap;
    }

    return super.getColorMap();
  }
}

export abstract class ActivateableDisableableComponent<T> extends Component<T> {
  protected activatedColorMap: T;
  protected disabledColorMap: T;
  protected isActivated: boolean;
  protected isDisabled: boolean;

  set activated(activated) {
    this.isActivated = activated;
  }

  set disabled(disabled) {
    this.isDisabled = disabled;
  }

  constructor(colorMap: T, activatedColorMap: T, disabledColorMap: T) {
    super(colorMap);
    this.activatedColorMap = activatedColorMap;
    this.disabledColorMap = disabledColorMap;
  }

  protected getColorMap(): T {
    if (this.isDisabled) {
      return this.disabledColorMap
    }

    if (this.isActivated) {
      return this.activatedColorMap;
    }

    return super.getColorMap();
  }
}
