import {MDCRipple} from '@material/ripple/index';

const buttons = [...document.querySelectorAll('.mdc-button')];
const ripples = new Set();

buttons.forEach((btn) => {
  ripples.add(new MDCRipple(btn));
  let button = new MDCRipple(btn);
  console.log(button);
});

// const ripple = new MDCRipple(document.querySelector('.mdc-button'));