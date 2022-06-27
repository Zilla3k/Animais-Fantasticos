const activeClass = "ativo";
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
  }
  function activeTab(i) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    tabContent[i].classList.add(activeClass);
  }
  tabMenu.forEach((itemMenu, i) => {
    itemMenu.addEventListener("click", () => {
      activeTab(i);
    });
  });
}
initTabNav();
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
  }
  accordionList.forEach((item) => {
    item.addEventListener("click", function activeAccordion(e) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    });
  });
}
initAccordion();
function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  linksInternos.forEach((link) => {
    link.addEventListener("click", function scrollSmooth(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
initScrollSmooth();
function initAnimScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const metadeJanela = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - metadeJanela < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimScroll();
