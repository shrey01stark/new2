gsap.registerPlugin(ScrollTrigger);

/* ================= PRELOADER ================= */

window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");

  setTimeout(function() {
    preloader.classList.add("loader-hidden");
    document.body.style.overflow = "auto";
  }, 1000);
});


/* ================= MOBILE MENU ================= */

document.addEventListener('DOMContentLoaded', () => {

  const menuTrigger = document.getElementById('menuTrigger');
  const mobHeader = document.querySelector('.mob-header');

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('active');
    mobHeader.classList.toggle('open');
  });

  const mobLinks = document.querySelectorAll('.mob-a');
  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuTrigger.classList.remove('active');
      mobHeader.classList.remove('open');
    });
  });


  /* ================= HEADER SCROLL ANIMATION ================= */

  const header = document.querySelector('header');

  const showAnim = gsap.from(header, { 
    yPercent: -120,
    paused: true,
    duration: 0.3
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      if (self.direction === -1) {
        showAnim.play();
      } else {
        showAnim.reverse();
      }
    }
  });


  /* ================= MARQUEE DIRECTION TOGGLE ================= */

  const control = document.getElementById("direction-toggle");
  const marquees = document.querySelectorAll(".marquee");
  const wrapper = document.querySelector(".wrapper");

  if (control) {
    control.addEventListener("click", () => {
      control.classList.toggle("toggle--vertical");
      wrapper.classList.toggle("wrapper--vertical");
      [...marquees].forEach((marquee) =>
        marquee.classList.toggle("marquee--vertical")
      );
    });
  }


  /* ================= TEAM CAROUSEL (FINAL WORKING VERSION) ================= */
/* ================= TEAM CAROUSEL (FINAL STABLE VERSION) ================= */

  const team = [
    {
      img: "./assets/img/M1.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "President",
      name: "Vatsal Sarawagi"
    },
    {
      img: "./assets/img/M2 copy 2.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "Vice-President",
      name: "Siddhant Gopalka"
    },
    {
      img: "./assets/img/Hey.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "General Secretary",
      name: "Garima Ahuja"
    },
    {
      img: "./assets/img/M4.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "Consulting Director",
      name: "Divisha"
    },
    {
      img: "./assets/img/M5 copy.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "Marketing Director",
      name: "Bhavye Gattani"
    },
    {
      img: "./assets/img/M6.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "Client Acquisition Director",
      name: "Deepanshu"
    },
    {
      img: "./assets/img/M7.png",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      role: "Operations Director",
      name: "Kush Singla"
    }
  ];

  let index = 0;
  let interval;

  const img   = document.getElementById("teamImg");
  const quote = document.getElementById("teamQuote");
  const role  = document.getElementById("teamRole");
  const name  = document.getElementById("teamName");
  const box   = document.querySelector(".core-text");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const dotsBox = document.getElementById("dots");

  /* RUN ONLY IF CAROUSEL EXISTS */
  if (img && quote && role && name && box && dotsBox && nextBtn && prevBtn) {

    /* CREATE DOTS */
    team.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        index = i;
        updateMember();
        resetAutoSlide();
      });
      dotsBox.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dots span");

    /* UPDATE FUNCTION */
    function updateMember() {
      box.classList.add("hide");

      setTimeout(() => {
        img.src = team[index].img;
        quote.textContent = team[index].quote;
        role.textContent = team[index].role;
        name.textContent = team[index].name;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");

        box.classList.remove("hide");
      }, 300);
    }

    /* BUTTONS */
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % team.length;
      updateMember();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + team.length) % team.length;
      updateMember();
      resetAutoSlide();
    });

    /* AUTO SLIDE */
    function startAutoSlide() {
      interval = setInterval(() => {
        index = (index + 1) % team.length;
        updateMember();
      }, 4000);
    }

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }

    /* INIT */
    updateMember();
    startAutoSlide();
  }

});   
