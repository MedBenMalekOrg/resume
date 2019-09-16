function fadeOutEffect() {
  var fadeTarget = document.getElementsByClassName("mouse_btn");
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}

function auto() {
  window.scroll(function() {
    1 <= window.scrollTop()
      ? fadeOutEffect()
      : document.getElementsByClassName("mouse_btn").fadeIn();
  });
}

auto();
