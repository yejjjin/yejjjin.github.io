$(document).ready(function () {
  // fullpage 초기화 및 스타일 적용
  $("#fullpage").fullpage({
    //Navigation
    menu: "#menu",
    lockAnchors: false,
    anchors: [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
    ],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: [
      "Home",
      "Profile",
      "Portfolio01",
      "Portfolio02",
      "Portfolio03",
      "Portfolio04",
      "contact",
    ],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: "bottom",
    // afterRender: function(origin, destination, direction){
    //     var section = destination.item;
    //     var progress = destination.index / (fullpage_api.getActiveSection().afterRender.length - 1);
    //     var lineWidth = progress * 100 + "%";
    //     document.getElementById("line").style.width = lineWidth;
    // },
    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: [
      "#111111",
      "black",
      "black",
      "black",
      "black",
      "black",
      "#222222",
    ],
    // paddingTop: "3em",
    paddingBottom: "10px",
    fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    //Custom selectors
    sectionSelector: ".section",
    slideSelector: ".slide",
    lazyLoading: true,
    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {},
    afterResize: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function (
      anchorLink,
      index,
      slideIndex,
      direction,
      nextSlideIndex
    ) {},
  });

  $(".scroll").on("click", "a", function (e) {
    e.preventDefault(); // 기본 동작 방지

    // .airdrop-hover 요소 보이기
    $(".airdrop-hover").addClass("visible");
  });

  // home : cursor 애니메이션
  const cursorSpan = document.querySelector(".cursor");
  const text = "ARCHIVE";

  let index = 0;

  function type() {
    if (index < text.length) {
      // 텍스트의 다음 글자를 커서 앞에 추가
      cursorSpan.insertAdjacentText("beforebegin", text[index]);
      index++;
      setTimeout(type, 150);
    }
  }

  type();

  // home : file 섹션 AOS 적용 (초기화)
  AOS.init();

  // footer
  const footerTit = document.querySelector(".footer-tit span");

  function marquee() {
    footerTit.style.animation = "marquee 15s linear infinite";
  }

  marquee();
});
