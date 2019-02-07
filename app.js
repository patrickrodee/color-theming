import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield/index';
import {MDCChipSet} from '@material/chips';

const buttons = new Set();
[...document.querySelectorAll('.mdc-button')].forEach((button) => {
  buttons.add(new MDCRipple(button));
});

const textfields = new Set();
[...document.querySelectorAll('.mdc-text-field')].forEach((textfield) => {
  textfields.add(new MDCTextField(textfield));
});

const chipsets = new Set();
[...document.querySelectorAll('.mdc-chip-set')].forEach((chipset) => {
  chipsets.add(new MDCChipSet(chipset));
});
