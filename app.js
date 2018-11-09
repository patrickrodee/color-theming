import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
  document.querySelectorAll('.adopt-a-pup-body').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove('adopt-a-pup-body--hidden');
    } else {
      element.classList.add('adopt-a-pup-body--hidden');
    }
  });
});

