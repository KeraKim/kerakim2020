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
    y: -30,
    alpha: 1,
  });

  const introText2 = TweenMax.to('.introText2', 0.5, {
    y: -30,
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

  const mainLogoText2 = TweenMax.staggerFromTo(
    '.mainLogoText2',
    0.4,
    {
      scale: 0.85,
    },
    {
      x: -180,
      backgroundColor: 'rgba(255, 222, 222)',
      scale: 1.2,
      rotation: 360,
      alpha: 0.9,
    },
    0.3
  );

  const mainLogo = TweenMax.to('.mainLogo', 0.5, {
    x: -200,
  });

  new ScrollMagic.Scene({
    triggerHook: 0,
    // triggerElement: "#trigger1",
    duration: '30%',
  })
    .setTween([headerLeftText1, headerLeftText2, headerRightText])
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerHook: 0.1,
    offset: "200%",
    duration: '90%',
  })
    .setTween([introText2])
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '90%',
  })
    // .setPin('.mainLogo')
      .setPin('.section-1')
    .setTween([lightOff, lightOn, introText1, mainLogoText1, mainLogoText2, mainLogo])
    .addTo(controller);
};

$(document).ready(() => {
  initScrollMagic();
});
