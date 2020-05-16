const initScrollMagic = () => {
  const controller = new ScrollMagic.Controller();

  //헤더 왼쪽 문구
  const headerLeftText1 = TweenMax.to('.leftText1', 0.5, {
    x: '-100%',
    alpha: 0,
  });

  //헤더 왼쪽 로고
  const headerLeftText2 = TweenMax.to('.leftText2', 0.5, {
    x: '100%',
    alpha: 1,
  });

  //헤더 오른쪽 문구
  const headerRightText = TweenMax.to('.rightText', 0.5, {
    scale: 0.8,
    rotation: 90,
    x: 50,
    y: 30,
    alpha: 0.7,
    color: '#555a61',
  });

  const introText1 = TweenMax.to('.introText1', 0.5, {
    y: -40,
    alpha: 1,
  });

  const introText2 = TweenMax.to('.introText2', 0.5, {
    y: -40,
    alpha: 1,
  });

  const lightOff = TweenMax.to('.light-off', 0.5, {
    alpha: 0,
  });

  const lightOn = TweenMax.to('.light-on', 0.5, {
    alpha: 1,
  });

  const mainLogoText1 = TweenMax.to('.mainLogoText1', 0.5, {
    color: '#892C2C',
  });

  const section1 = TweenMax.to('.section-1', 0.5, {
    alpha: 0,
  });

  const titleText = TweenMax.to(
    '.titleText1, .titleText2, .titleText3, .titleText4',
    0.5,
    {
      alpha: 1,
    }
  );

  const profileImage = TweenMax.to('.profileImageWrap', 0.5, {
    y: -100,
  });

  const mainLogoText2 = TweenMax.staggerFromTo(
    '.mainLogoText2',
    0.4,
    {
      scale: 0.85,
    },
    {
      x: -180,
      backgroundColor: 'rgba(255, 212, 212)',
      scale: 1.2,
      rotation: 360,
      alpha: 0.9,
    },
    0.3
  );

  const mainLogo = TweenMax.to('.mainLogo', 0.5, {
    x: -200,
  });

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
  new ScrollMagic.Scene({
    triggerElement: '.section-3',
    duration: '50%',
    offset: '40%',
  })
    .setTween(skill)
    .addTo(controller)
  .addIndicators({
    name: 'section-1',
  });


  new ScrollMagic.Scene({
    // triggerHook: 0,
    triggerElement: '.intro',
    offset: '350%',
    duration: '30%',
  })
    .setTween(section1)
    .addTo(controller);
  // .addIndicators({
  //   name: 'section-1',
  // });

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '30%',
  })
    .setTween([headerLeftText1, headerLeftText2, headerRightText])
    .addTo(controller);
  // .addIndicators({
  //   name: 'header',
  // });

  new ScrollMagic.Scene({
    triggerHook: 0.2,
    offset: '200%',
    duration: '90%',
  })
    .setTween([introText2])
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '90%',
  })
    .setPin('.section-1')
    .setTween([
      lightOff,
      lightOn,
      introText1,
      mainLogoText1,
      mainLogoText2,
      mainLogo,
    ])
    .addTo(controller);

  new ScrollMagic.Scene({
    // triggerHook: 0.2,
    triggerElement: '.section-2',
    offset: '-200%',
    duration: '30%',
  })
    .setTween(titleText)
    .addTo(controller);

  new ScrollMagic.Scene({
    // triggerHook: 0.2,
    triggerElement: '.section-2',
    offset: '-170%',
    duration: '50%',
  })
    .setTween(profileImage)
    .addTo(controller);
};

$(document).ready(() => {
  $('.year').text(new Date().getFullYear() - 2016);

  initScrollMagic();
});
