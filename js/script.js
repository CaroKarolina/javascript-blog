'use strict';

//const { active } = require("browser-sync");

const titleClickHandler = function(event){
  event.preventDefault();
  const   clickedElement = this;
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  this.classList.add('active');
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = this.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);  
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector='.post-tags .list',
  optTagsListSelector='.tags.list';

function generateTitleLinks(customSelector = ''){
  console.log(generateTitleLinks);
  const titleList=document.querySelectorAll(optTitleListSelector+customSelector);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  let html = '';
  /* START LOOP: for every article: */
  for(let article of articles){
    /* remove contents of titleList for each article */
    /* get the article id */
    const articleId=article.getAttribute('id');
    console.log=(articleId);
    /* find the title element & get the title from the title element*/
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /*create HTML of the link (const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';)*/
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  }
  /* insert link into titleList */
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

function generateTags(){
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link (const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';) */
      const linkHTML='<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html=html + linkHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if(allTags.indexOf(linkHTML) == -1){
        /* [NEW] add generated code to allTags array */
        allTags.push(linkHTML);
      }
      /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href=clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  //'a.active[href^="#tag-"]'atrybut href zaczynający się od "#tag-", href jest w index.html, ale gdzie ten #tag?
  const tag=href.replace('#tag-','');

  /* find all tag links with class active */
  const activeTags=document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(activeTag of activeTags){
  /* remove class active */
    activeTag.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefTag=document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for(let hrefTag of hrefTags){
  /* add class active */
    hrefTags.classList.add('active');
    /* END LOOP: for each found tag link */
  }
/* execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-tags~="' + tag + '"]');
}

generateTags();

function addClickListenersToTags(){
  /* find all links to tags */
  const allLinkToTags=document.querySelectorAll('a[href^="#tag-"]');
  
  /* START LOOP: for each link */
  for (let allLinkToTag of allLinksToTag){
    /* add tagClickHandler as event listener for that link */
    allLinkToTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors (){
/* find all articles */
const articles = document.querySelectorAll(optArticleSelector); 
  /* START LOOP: for every article: */
  for(let article of articles){
  /* find tags wrapper */
    const authorList = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let lnkHTML='';
    /* get tags from data-tags attribute */
    const authorTag = article.getAttribute('data-author');
    /* generate HTML of the link: linkHtml = '<a href="#author-' + authorTag + '"><span>' + authorTag + '</span></a>';*/
    const linkHtml='??';
    /* add generated code to html variable */
    authorList.insertAdjacentHTML('beforeend', linkHtml);
    /* END LOOP: for each tag */
  }
  /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
}

generateAuthors();

function autorClickHandler(event){
/* prevent default action for this event */
event.preventDefault();
/* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;
/* make a new constant "href" and read the attribute "href" of the clicked element */
const href=clickedElement.getAttribute('href');
/* make a new constant "author" and extract tag from the "href" constant */
//'a.active[href^="#tag-"]'atrybut href zaczynający się od "#tag-", href jest w index.html, ale gdzie ten #tag?
const author = href.replace('#author-', ''); 
/* find all tag links with class active */
const activeAuthorsLinks = document.querySelectorAll('a.active[href^="#author-"]');
/* START LOOP: for each active tag link */
for(activeAuthorLinks of activeAuthorsLinks){
/* remove class active */
  activeAuthorLink.classList.remove('active'); 
/* END LOOP: for each active tag link */
}
/* find all tag links with "href" attribute equal to the "href" constant - TO ZMIENIĆ CZY NIE ZMIENIAĆ*/
const hrefTag=document.querySelectorAll('a[href="' + href + '"]');
/* START LOOP: for each found tag link */
for(let hrefTag of hrefTags){
/* add class active */
  hrefTags.classList.add('active');
  /* END LOOP: for each found tag link */
}
}

autorClickHandler();

function addClickListenersToAuthos(){
  /* find all links to tags */
  const allLinkToTags=document.querySelectorAll('a[href^="#author-"]');
  
  /* START LOOP: for each link */
  for (let allLinkToTag of allLinksToTag){
    /* add tagClickHandler as event listener for that link */
    allLinkToTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();