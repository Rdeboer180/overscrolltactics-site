// Replay control for the hero lockup animation.
(function () {
  var hero = document.getElementById("hero");
  var replay = document.getElementById("replay");
  if (!hero || !replay) return;
  replay.addEventListener("click", function () {
    hero.classList.remove("play");
    void hero.offsetWidth; // restart CSS animations
    hero.classList.add("play");
  });
})();
