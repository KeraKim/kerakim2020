let browserType = '';

const getBrowserType = () => {
  const width = window.innerWidth;

  if (width > 1200) {
    browserType = 'pc';
  } else if (width <= 1200 && width >= 768) {
    browserType = 'tablet';
  } else {
    browserType = 'mobile';
  }
};

const initScrollMagic = () => {
  const controller = new ScrollMagic.Controller();

  //헤더 왼쪽 문구
  const headerLeftText1 = TweenMax.to('.leftHeaderText1', 0.5, {
    x: '-100%',
    alpha: 0,
  });

  //헤더 왼쪽 로고
  const headerLeftText2 = TweenMax.to('.leftHeaderText2', 0.5, {
    x: '100%',
    alpha: 1,
  });

  //헤더 오른쪽 문구
  const headerRightText = TweenMax.to('.rightHeaderText', 0.5, {
    scale: 0.8,
    rotation: 90,
    x: 20,
    y: 10,
    alpha: 0.7,
    color: '#555a61',
  });

  const introText = TweenMax.staggerFromTo(
    '.introText',
    0.7,
    {
      y: 0,
      alpha: 0,
    },
    {
      alpha: 1,
      y: -40,
    },
    0.2
  );

  const lightOff = TweenMax.to('.light-off', 0.5, {
    alpha: 0,
  });

  const lightOn = TweenMax.to('.light-on', 0.5, {
    alpha: 1,
  });

  const mainLogoText1 = TweenMax.to('.mainLogoText1', 0.5, {
    color: '#892C2C',
  });

  const mainLogoText2 = TweenMax.staggerFromTo(
    '.mainLogoText2',
    0.4,
    {
      scale: 0.85,
    },
    {
      x: browserType == 'pc' ? -180 : browserType == 'tablet' ? -150 : '-20vw',
      backgroundColor: 'rgba(255, 212, 212)',
      scale: 1.2,
      rotation: 360,
      alpha: 0.9,
    },
    0.3
  );

  const mainLogo = TweenMax.to('.mainLogo', 0.5, {
    x: browserType == 'pc' ? -200 : browserType == 'tablet' ? -50 : -20,
  });

  const section1 = TweenMax.to('.section-1', 0.5, {
    alpha: 0,
  });

  const titleText = TweenMax.staggerFromTo(
    '.titleText1, .titleText2, .titleText3, .titleText4',
    0.4,
    {
      alpha: 0.5,
    },
    {
      alpha: 1,
    },
    0.3
  );

  const skill = TweenMax.staggerFromTo(
    '.skill',
    0.7,
    {
      y: '45px',
    },
    {
      y: 0,
    },
    0.2
  );

  const profileImage = TweenMax.to('.profileImageWrap', 0.5, {
    y: -100,
  });

  const closeText = TweenMax.staggerFromTo(
    '.closeText',
    0.7,
    {
      x: '-50px',
      alpha: 0.5,
    },
    {
      x: 0,
      alpha: 1,
    },
    0.2
  );

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '30%',
  })
    .setTween([headerLeftText1, headerLeftText2, headerRightText])
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '90%',
  })
    .setPin('.section-1')
    .setTween([
      introText,
      lightOff,
      lightOn,
      mainLogoText1,
      mainLogoText2,
      mainLogo,
    ])
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.introTextWrap',
    offset: '410%',
    duration: '20%',
  })
    .setTween(section1)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.section-2',
    offset: '-100%',
    duration: '30%',
  })
    .setTween(titleText)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.section-2',
    offset: '-200%',
    duration: '50%',
  })
    .setTween(profileImage)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.section-3',
    duration: '80%',
    offset: '180%',
  })
    .setTween(skill)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.section-4',
    duration: '30%',
    offset:
      browserType == 'pc' ? '-80%' : browserType == 'tablet' ? '-80%' : '40%',
  })
    .setTween(closeText)
    .addTo(controller)
    // .addIndicators({
    //   name: 'header',
    // });
};

$(document).ready(() => {
  $('.year').text(new Date().getFullYear() - 2016);

  //브라우저 타입 구분
  getBrowserType();

  //왼쪽 상단 로고 클릭시 맨 위로 이동
  $('.leftHeaderText2').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  //매직스크롤 초기화
  initScrollMagic();
});
