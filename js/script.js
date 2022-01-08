'use strict';

//const { active } = require("browser-sync");

const titleClickHandler = function(event){
  event.preventDefault();
  const   clickedElement = this;
  //console.log('Link was clicked!', event);

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
  //console.log(articleSelector);
  
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  //console.log(targetArticle);
  
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector='.post-tags .list';

function generateTitleLinks(){
  console.log(generateTitleLinks);
  const titleList=document.querySelectorAll(optTitleListSelector);
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
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /* generate HTML of the link (const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';) */
      const linkHTML='<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

      /* add generated code to html variable */
      html=html + linkHTML;

    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    html=linkHTML+tagsWrapper;

  /* END LOOP: for every article: */
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
  
    /* START LOOP: for each found tag link */
  
    /* add class active */
  
    /* END LOOP: for each found tag link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
  
    /* START LOOP: for each link */
  
    /* add tagClickHandler as event listener for that link */
  
    /* END LOOP: for each link */
  }
  
  addClickListenersToTags();
}