import {MDCRipple} from '@material/ripple/index';

const buttons = [...document.querySelectorAll('.mdc-button')];
const ripples = new Set();

buttons.forEach((btn) => {
  ripples.add(new MDCRipple(btn));
});