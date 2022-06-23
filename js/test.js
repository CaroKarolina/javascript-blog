'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  const activeArticles = document.querySelectorAll('.post');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  console.log(activeArticles);
  const clickedElement = this;
  clickedElement.classList.add('active');
  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
  console.log(articleSelector);

  console.log(targetArticle);
};

const links = document.querySelectorAll('.titles a');
for(let link of links){
link.addEventListener('click', titleClickHandler);
};