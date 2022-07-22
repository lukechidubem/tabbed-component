'use strict';
const tabsContainer = document.querySelector('.tabs-container');
const contentContainer = document.querySelector('.content-container');
const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.content');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const tab = e.target;
  const clicked = tab.closest('.tab');

  // Removing active class on all tags and adding it to only clicked tag
  tabs.forEach(el => {
    el.classList.remove('tab-active');
  });
  clicked.classList.add('tab-active');

  // Removing active class on all tag-contents and adding it to only clicked tag-content
  tabsContent.forEach(el => {
    el.classList.remove('content-active');
  });

  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.add('content-active');
});
