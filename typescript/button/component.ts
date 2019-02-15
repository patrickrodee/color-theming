import {ColorMap} from '../colors/map';
import {DisableableComponent} from '../component';
import {SurfaceButtonColorMap, ContainerButtonColorMap, OutlineButtonColorMap} from './mapping';
import { ColorSet } from '../colors/set';

abstract class Button<T extends ColorMap> extends DisableableComponent<T> {
  set disabled(disabled) {
    this.isDisabled = disabled;
    return;
  }
}

abstract class SurfaceButton extends Button<SurfaceButtonColorMap> {};
abstract class ContainerButton extends Button<ContainerButtonColorMap> {};
abstract class OutlineButton extends Button<OutlineButtonColorMap> {};

export class TextButton extends SurfaceButton {
  static withColorSets(defaultColorSet: ColorSet, disabledColorSet: ColorSet): TextButton {
    return new TextButton(
      new SurfaceButtonColorMap(defaultColorSet),
      new SurfaceButtonColorMap(disabledColorSet));
  }

  render(textLabel: string, icon: string): string {
    return `
      <div>
        <span style="color: ${this.getColorMap().icon()}">${icon}</span>
        <span style="color: ${this.getColorMap().ink()}">${textLabel}</span>
      </div>
    `
  }
}

export class FillButton extends ContainerButton {
  static withColorSets(defaultColorSet: ColorSet, disabledColorSet: ColorSet): ContainerButton {
    return new FillButton(
      new ContainerButtonColorMap(defaultColorSet),
      new ContainerButtonColorMap(disabledColorSet));
  }

  render(textLabel: string, icon: string): string {
    return `
      <div style="background:${this.getColorMap().container()};">
        <span style="color: ${this.getColorMap().icon()}">${icon}</span>
        <span style="color: ${this.getColorMap().ink()}">${textLabel}</span>
      </div>
    `
  }
}

export class OutlinedButton extends OutlineButton {
  render(textLabel: string, icon: string): string {
    return `
      <div style="border: 1px solid ${this.getColorMap().outline()}">
        <span style="color: ${this.getColorMap().icon()}">${icon}</span>
        <span style="color: ${this.getColorMap().ink()}">${textLabel}</span>
      </div>
    `
  }
}
