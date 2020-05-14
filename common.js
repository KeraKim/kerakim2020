const initScrollMagic = () => {
  const controller = new ScrollMagic.Controller();

  const headerLeftText = TweenMax.to('.leftText', 0.5, {
    x: '-100%',
    alpha: 0,
  });

  const headerRightText = TweenMax.to('.rightText', 0.5, {
    scale: 0.8,
    rotation: 90,
    x: 50,
    y: 70,
    alpha: 0.7,
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
      x: -280,
      backgroundColor: '#FF8282',
      scale: 1.2,
      rotation: 360,
      alpha: 0.9,
    },
    0.3
  );

  new ScrollMagic.Scene({
    triggerHook: 0,
    // triggerElement: "#trigger1",
    duration: '30%',
  })
    .setTween([headerLeftText, headerRightText])
    .addTo(controller)
    .addIndicators({
      name: 'header',
    });

  new ScrollMagic.Scene({
    triggerHook: 0,
    duration: '80%',
  })
    .setPin('.mainLogo')
    .setTween([lightOff, lightOn, mainLogoText1, mainLogoText2])
    .addTo(controller)
    .addIndicators({
      name: 'mainLogo',
    });
};

$(document).ready(() => {
  initScrollMagic();
});
