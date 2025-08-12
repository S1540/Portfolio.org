let tsparticles = document.querySelector("#tsparticles");

tsParticles.load(tsparticles, {
  background: { color: "black" },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 20 },
    },
  },
  particles: {
    shape: { type: "star" }, // Star Shapes
    color: {
      value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
    },
    move: { enable: true, speed: { min: 0.5, max: 2 } },
    size: { value: { min: 2, max: 6 } },
    number: { value: 130 },
    opacity: { value: 0.5 },
  },
});
