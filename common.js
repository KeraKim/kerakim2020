const initScrollMagic = () => {
  const controller = new ScrollMagic.Controller();

  const headerLeftText1 = TweenMax.to('.leftText1', 0.5, {
    x: '-100%',
    alpha: 0,
  });

  const headerLeftText2 = TweenMax.to('.leftText2', 0.5, {
    x: '100%',
    alpha: 1,
  });

  const headerRightText = TweenMax.to('.rightText', 0.5, {
    scale: 0.8,
    rotation: 90,
    x: 50,
    y: 70,
    alpha: 0.7,
    color: '#555a61',
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
    .addTo(controller)
    .addIndicators({
      name: 'header',
    });

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '90%',
  })
    .setPin('.mainLogo')
    .setTween([lightOff, lightOn, mainLogoText1, mainLogoText2, mainLogo])
    .addTo(controller)
    .addIndicators({
      name: 'mainLogo',
    });
};

$(document).ready(() => {
  initScrollMagic();
});
