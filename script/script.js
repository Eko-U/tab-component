'use strict';
const btnContainer = document.querySelector('.grid-btn');

btnContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.btn');

  if (!clicked) return;

  document
    .querySelectorAll('.form')
    .forEach((form) => form.classList.remove('active--content'));

  document.querySelectorAll('.btn').forEach((el) => {
    el.classList.remove('active--btn', 'not--active');
  });

  const tab = +e.target.dataset.tab;

  e.target.classList.add('active--btn');

  document.querySelectorAll('.btn').forEach((el) => {
    if (e.target !== el) el.classList.add('not--active');
  });

  document.querySelector(`.form--${tab}`).classList.add('active--content');
});
