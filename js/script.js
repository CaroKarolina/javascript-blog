'use strict';

document.getElementById('test-button').addEventListener('click', function() {
  const links = document.querySelectorAll('.titles a');
  console.log('links', links);
}

//const { active } = require("browser-sync");

// const titleClickHandler = function (event) {
//   event.preventDefault();
//   const clickedElement = this;
//   /* remove class 'active' from all article links  */

//   /* add class 'active' to the clicked link */
//   this.classList.add('active');
//   /* remove class 'active' from all articles */

//   /* get 'href' attribute from the clicked link */
//   const articleSelector = this.getAttribute('href');
//   /* find the correct article using the selector (value of 'href' attribute) */
//   const targetArticle = document.querySelector(articleSelector);
//   /* add class 'active' to the correct article */
//   targetArticle.classList.add('active');
// };

const titleClickHandler = function(event){
  event.preventDefault();
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  console.log(activeLinks)
  const activeArticles = document.querySelectorAll('.post active');
  for (activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  const clickedElement = this;
  console.log(this);
  this.classList.add('active');
  console.log('clickedElement (with plus): ' + clickedElement);
  const articleSelector = this.getAttribute('href');
  console.log(articleSelector);
  // const targetArticle = document.querySelector()
};

const links = document.querySelectorAll('.titles');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorsSelector = '.list.authors',
  optTagsListSelector = '.tags.list';

function generateTitleLinks(customSelector = '') {
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  let html = '';
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* remove contents of titleList for each article */
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element & get the title from the title element*/
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /*create HTML of the link (const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';)*/
    html += '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  }
  /* insert link into titleList */
  titleList.innerHTML = html;
}
generateTitleLinks();

function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    const articleId = article.getAttribute('id');
    /*split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      let tagDisplay = '<li><a href="#tag-' + tag + '"> ' + tag + ' </a></li>';
      tagsWrapper.innerHTML+=tagDisplay;
      /* add generated code to HTML variable */
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
      /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    }
  }
  /* [NEW] find list of tags in right column */
  /* [NEW] add html from allTags to tagList */
  const tagList = document.querySelector(optTagsListSelector);
  for (let tag in allTags) {
    let tagHtml='<li><a href="#">'+tag+ '</a> ('+allTags[tag]+')</li>';
    tagList.innerHTML+=tagHtml;
  } 
}

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  //'a.active[href^="#tag-"]'atrybut href zaczynający się od "#tag-", href jest w index.html, ale gdzie ten #tag?
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (activeTags of activeTags) {
    /* remove class active */
    activeTags.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefTag = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let hrefTag of hrefTag) {
    /* add class active */
    hrefTag.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

generateTags();

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    let linkHtml = '';
    const authorList = article.querySelector('post-author');
    const authorTag = article.getAttribute('data-authors');
    linkHtml = '<a href="#author-' + authorTag + '"><span>' + authorTag + '</span></a>';
    console.log(authorList, linkHtml);
  }
}

generateAuthors();

function authorClickHandler(event){
  event.preventDefault();
  const clicked = this;
  let author = clicked.getAttribute('href');
  author = author.replace('#author-','');
  author = author.replace('&',' ');
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-authors="' + author + '"]');
}

function addClickListenersToAuthors(){
  const authorLinks = document.querySelectorAll('a[href^="#authors-"');
  for(let authorLink of authorLinks){
    authorLink.addEventListener('click', authorClickHandler);
  }
}

addClickListenersToAuthors();