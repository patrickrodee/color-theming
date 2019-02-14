import {ColorSet, ColorMap} from './colors';

export interface IBaseComponent {
  default(colorSet: ColorSet, colorMap?: ColorMap): void;
}

export interface IErrorableComponent extends IBaseComponent {
  error(colorSet: ColorSet, colorMap?: ColorMap): void;
}

export interface IActivatableComponent extends IBaseComponent {
  active(colorSet: ColorSet, colorMap?: ColorMap): void;
}

export interface ISelectableComponent extends IBaseComponent {
  selected(colorSet: ColorSet, colorMap?: ColorMap): void;
}

export interface IDisableableComponent extends IBaseComponent {
  disabled(colorSet: ColorSet, colorMap?: ColorMap): void;
}

export interface Fab extends IBaseComponent {}
export interface Button extends IDisableableComponent {}
export interface Checkbox extends ISelectableComponent {}
export interface Radio extends ISelectableComponent {}
export interface Tab extends IActivatableComponent {}
export interface TextField extends IErrorableComponent, IActivatableComponent {}

export abstract class Component implements IBaseComponent {
  protected defaultColorSet: ColorSet;
  protected defaultColorMap: ColorMap;

  default(colorSet, colorMap?) {
    this.defaultColorSet = colorSet;
    this.defaultColorMap = colorMap;
  }
}

export abstract class DisableableComponent extends Component implements IDisableableComponent {
  protected disabledColorSet: ColorSet;
  protected disabledColorMap: ColorMap;

  disabled(colorSet, colorMap) {
    this.disabledColorSet = colorSet;
    this.disabledColorMap = colorMap;
  }
}

export abstract class SelectableComponent extends Component implements ISelectableComponent {
  protected disabledColorSet: ColorSet;
  protected disabledColorMap: ColorMap;

  disabled(colorSet, colorMap) {
    this.disabledColorSet = colorSet;
    this.disabledColorMap = colorMap;
  }
}
