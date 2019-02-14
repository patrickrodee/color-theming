import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield/index';
import {MDCChipSet} from '@material/chips';
import {MDCTabBar} from '@material/tab-bar';
import {MDCList} from '@material/list';

function elementArray(query) {
  return [...document.querySelectorAll(query)]
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

const disableControl = document.querySelector('.disabled-interactive-elements');
if (disableControl) {
  disableControl.addEventListener('change', (evt) => {
    disableInteractiveElements(evt.target.checked);
  });
}

function disableInteractiveElements(disabled) {
  elementArray('.mdc-button').forEach((btn) => btn.disabled = disabled);
}
