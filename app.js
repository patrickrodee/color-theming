import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield/index';

const buttons = new Set();
[...document.querySelectorAll('.mdc-button')].forEach((btn) => {
  buttons.add(new MDCRipple(btn));
});

const textfields = new Set();
[...document.querySelectorAll('.mdc-text-field')].forEach((tf) => {
  textfields.add(new MDCTextField(tf));
});
