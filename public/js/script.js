var indicateSlide,
  circleIndicator,
  updateCircleIndicator,
  prevSlide,
  nextSlide,
  changeSlid,
  resetTimer,
  autoPlay;

document.addEventListener("DOMContentLoaded", function(event) {
  // Indicators
  const slider = document.querySelector(".slider");
  const slides = slider ? slider.children : [];
  const indicator = document.querySelector(".indicator");
  let index = 0;

  // eslint-disable-next-line
  indicateSlide = (element) => {
    index = element.id;
    changeSlid();
    updateCircleIndicator();
    resetTimer();
  }

  // create circle indicators
  circleIndicator = () => {
    for (let i = 0; i < slides.length; i++) {
      const div = document.createElement("div");
      // div.innerHTML=i+1;
      div.setAttribute("onclick", "indicateSlide(this)");
      div.id = i;
      if (i == 0) {
        div.className = "active";
      }
      indicator.appendChild(div);
    }
  }
  circleIndicator();

  //update circle indicator
  updateCircleIndicator = () => {
    for (let i = 0; i < indicator.children.length; i++) {
      indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
  }

  //Change Slide
  // eslint-disable-next-line
  prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
    } else {
      index--;
    }
    changeSlid();
  }

  nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeSlid();
  }

  changeSlid = () => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
  }

  resetTimer = () => {
    clearInterval(Timer);
    Timer = setInterval(autoPlay, 4000);
  }

  autoPlay = () => {
    nextSlide();
    updateCircleIndicator();
  }

  let Timer = setInterval(autoPlay, 4000);

});
