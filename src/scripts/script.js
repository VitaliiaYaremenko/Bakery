'use strict';

const modal = document.querySelector('.backdrop');
const modalBntOpen = document.querySelector('.modal__btn-open');
const modalBtnClose = document.querySelector('.modal__btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBntOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
