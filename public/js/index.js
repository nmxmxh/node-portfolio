const secondPageView = document.querySelector(".second-page-view");
const startingPageView = document.querySelector(".starting-page-view");
const thirdPageView = document.querySelector(".third-page-view");
const fourthPageView = document.querySelector(".fourth-page-view");



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 550 || document.documentElement.scrollTop < 550){
    secondPageView.style.opacity = "0.2";
    startingPageView.style.opacity = "1";
    thirdPageView.style.opacity = "0.2";
    fourthPageView.style.opacity = "0.2";
  }
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    secondPageView.style.opacity = "1";
    startingPageView.style.opacity = "0.2";
    thirdPageView.style.opacity = "0.2";
    fourthPageView.style.opacity = "0.2";
  }  
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    thirdPageView.style.opacity = "1";
    secondPageView.style.opacity = "0.2";
    startingPageView.style.opacity = "0.2";
    fourthPageView.style.opacity = "0.2";
  } 
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    thirdPageView.style.opacity = "0.2";
    secondPageView.style.opacity = "0.2";
    startingPageView.style.opacity = "0.2";
    fourthPageView.style.opacity = "1";
  } 

}





