"use strict";
window.document.addEventListener('DOMContentLoaded',()=>{
  //tabs
if (document.querySelectorAll(".tabheader__item").length > 0) {
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tab-content");
  const tabParent = document.querySelector(".hero-menu_header");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove("current");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("current");
  }
  hideTabContent();
  showTabContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

//slides
if (document.querySelectorAll(".offer__slider").length > 0) {
  const slides = document.querySelectorAll(".offer__slider"),
    prev = document.querySelector(".ec-button-prev"),
    next = document.querySelector(".ec-button-next");

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => (item.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  if(prev){
    prev.addEventListener("click", () => {
      plusSlides(-1);
    });
  }else{
    console.log('error');
  }
 
  next.addEventListener("click", () => {
    plusSlides(1);
  });
}
if (document.querySelectorAll(".swiper-slide").length > 0) {
  const slides = document.querySelectorAll(".swiper-slide"),
    prev = document.querySelector(".tc-button-prev"),
    next = document.querySelector(".tc-button-next");

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => (item.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  if(prev){
    prev.addEventListener("click", () => {
      plusSlides(-1);
    });
  }else{
    console.log('error');
  }
  if(next){
    next.addEventListener("click", () => {
      plusSlides(1);
    });
  }else{
    console.log('error');
  }
} 

//clock
if (document.querySelectorAll(".countdown").length > 0) {
  const timeEnd = "2024-01-31";
function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = document.querySelector("#days"),
    hours = document.querySelector("#hours"),
    minutes = document.querySelector("#minutes"),
    seconds = document.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);
  updateClock();
  function updateClock() {
    const t = getTimeRemaining(endtime);
    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    seconds.innerHTML = t.seconds;
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setClock(".countdown", timeEnd);
}

})