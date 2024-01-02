"use strict";
//tabs
if ($(".tabheader__item")) {
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
if ($(".tabheader__item")) {
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
if ($(".offer__slider")) {
  const slides = document.querySelectorAll(".offer__slider"),
    prev = document.querySelector(".tc-button-prev"),
    next = document.querySelector(".tc-button-next"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current");

  let slideIndex = 1;
  showSlides(slideIndex);
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => (item.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
    if (slides.length > 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });
}
if ($(".offer__slide")) {
  const slides = document.querySelectorAll(".offer__slide"),
    prev = document.querySelector(".ec-button-prev"),
    next = document.querySelector(".ec-button-next"),
    total = document.querySelector("#tota"),
    current = document.querySelector("#curren");

  let slideIndex = 1;
  showSlides(slideIndex);
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => (item.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
    if (slides.length > 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });
}

//clock
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
setClock(".timer", timeEnd);
