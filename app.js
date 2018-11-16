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


let currentAdoptCardForm = null;
const adoptForm = document.querySelector('.adopt-form');
const cardActions = document.querySelectorAll('.mdc-card__primary-action');

const removeForm = (card) => {
  
}

const handleCardActionClick = (e) => {
  if (currentAdoptCardForm) {
    removeForm(currentAdoptCardForm);
    if (currentAdoptCardForm === e.target) return;
  }
  
  currentAdoptCardForm = e.target;
  
  
}

cardActions.forEach(cardAction => {
  document.addEventListener('click', handleCardActionClick);
});