import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield/index';
import {MDCChipSet} from '@material/chips';
import {MDCTabBar} from '@material/tab-bar';
import {MDCList} from '@material/list';
import {MDCCheckbox} from '@material/checkbox';
import {MDCRadio} from '@material/radio';
import {MDCSwitch} from '@material/switch';

function childElementArray(root, query) {
  return [...root.querySelectorAll(query)]
}

function elementArray(query) {
  return childElementArray(document, query);
}

const buttons = new Set();
elementArray('.mdc-button').forEach((button) => {
  buttons.add(new MDCRipple(button));
});

const textfields = new Set();
elementArray('.mdc-text-field').forEach((textfield) => {
  textfields.add(new MDCTextField(textfield));
});

const chipsets = new Set();
elementArray('.mdc-chip-set').forEach((chipset) => {
  chipsets.add(new MDCChipSet(chipset));
});

const tabbars = new Set();
elementArray('.mdc-tab-bar').forEach((tabbar) => {
  tabbars.add(new MDCTabBar(tabbar));
});

const lists = new Set();
elementArray('.mdc-list').forEach((listEl) => {
  const list = new MDCList(listEl);
  list.listElements.forEach((listItemEl) => new MDCRipple(listItemEl));
  list.singleSelection = true;
  lists.add(list);
});

const checkboxes = new Set();
elementArray('.mdc-checkbox').forEach((checkboxEl) => {
  const checkbox = new MDCCheckbox(checkboxEl);
  checkboxes.add(checkbox);
});

const radios = new Set();
elementArray('.mdc-radio').forEach((radioEl) => {
  const radio = new MDCRadio(radioEl);
  radios.add(radio);
});

const switches = new Set();
elementArray('.mdc-switch').forEach((s) => {
  const sw = new MDCSwitch(s);
  switches.add(sw);
});

const disableControl = document.querySelector('.disabled-interactive-elements');
if (disableControl) {
  disableControl.addEventListener('change', (evt) => {
    disableInteractiveElements(evt.target.checked);
  });
}

function disableInteractiveElements(disabled) {
  elementArray('.mdc-button').forEach((btn) => btn.disabled = disabled);
  elementArray('.mdc-text-field').forEach((tf) => tf.classList.toggle('mdc-text-field--disabled', disabled));
  elementArray('.mdc-radio').forEach((r) => {
    r.classList.toggle('mdc-radio--disabled', disabled);
    r.querySelector('input').disabled = disabled;
  });
}

const errorControl = document.querySelector('.error-interactive-elements');
if (errorControl) {
  errorControl.addEventListener('change', (evt) => {
    errorInteractiveElements(evt.target.checked);
  });
}

function errorInteractiveElements(error) {
  elementArray('.mdc-text-field').forEach((tf) => tf.classList.toggle('mdc-text-field--invalid', error));
  elementArray('.mdc-chip-set--input .mdc-chip').forEach((chip) => chip.classList.toggle('mdc-chip--error', error));
}

function rgbToObj(rgb) {
  const colors = rgb.replace(/[^\d,]/g, '').split(',');
  return {
    r: parseInt(colors[0]),
    g: parseInt(colors[1]),
    b: parseInt(colors[2]),
  }
}

function luminanace(rgb) {
  const {r, g, b} = rgbToObj(rgb);
  var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
  const lum1 = luminanace(rgb1) + 0.05;
  const lum2 = luminanace(rgb2) + 0.05;
  const oneOverTwo = lum1 / lum2;
  const twoOverOne = lum2 / lum1;
  if (oneOverTwo > twoOverOne) {
    return oneOverTwo;
  }
  return twoOverOne;
}

function getElementBgColor(el) {
  return window.getComputedStyle(el).backgroundColor;
}

function calculateContrastForColorSet(colorSetEl) {
  const containerEls = childElementArray(colorSetEl, '.color-set__cell--container');
  const containerColor = getElementBgColor(containerEls[0]);
  const colorSetCellEls = childElementArray(colorSetEl, '.color-set__cell:not(.color-set__cell--container)');
  colorSetCellEls.forEach((el) => {
    const cellColor = getElementBgColor(el);
    const ratio = contrast(containerColor, cellColor);
    el.dataset.contrastRatio = ratio.toFixed(2);

    if (ratio >= 4.5) {
      el.classList.add('color-set__cell--ok');
    }

    if (ratio < 4.5 && ratio >= 3) {
      el.classList.add('color-set__cell--warn');
    }

    if (ratio < 3) {
      el.classList.add('color-set__cell--fail');
    }
  });
}

elementArray('.color-set').forEach((colorSet) => {
  calculateContrastForColorSet(colorSet);
})
