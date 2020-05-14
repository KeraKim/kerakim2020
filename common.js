const initScrollMagic = () => {
  const controller = new ScrollMagic.Controller();

  const headerLeftText = TweenMax.to(".leftText", 0.5, {
    x: "-100%",
    alpha: 0
  });

  const headerRightText = TweenMax.to(".rightText", 0.5, {
    scale: 0.8,
    rotation: 90,
    x: 50,
    y: 70,
    alpha: 0.7
  });

  const scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    // triggerElement: "#trigger1",
    duration: "30%"
  })
      .setTween([headerLeftText, headerRightText])
      .addTo(controller)
      .addIndicators({
        name: "1",
      });
}

$(document).ready(() => {
  initScrollMagic()
});