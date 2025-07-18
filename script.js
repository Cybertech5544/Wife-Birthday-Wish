// for floting balloon

const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(8) + 8;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon2 = document.createElement("div");
    balloon2.className = "balloon2";
    balloon2.style.cssText = getRandomStyles();
    balloonContainer.append(balloon2);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}

window.addEventListener("load", () => {
  createBalloons(30);
});

// for sprinkels

var maxParticleCount = 150;
var particleSpeed = 0.5;
var colors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson",
];
var particles = [];
var waveAngle = 0;

document.addEventListener("click", handler, true);

function handler(e) {
  e.stopPropagation();
  e.preventDefault();
}

(function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 16.6666667);
      }
    );
  })();

  var canvas = document.getElementById("confetti-canvas");
  if (canvas === null) {
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "confetti-canvas");
    canvas.setAttribute(
      "style",
      "position:fixed;top:0;left:0;width:100%;height:100%;display:block;z-index:999999;pointer-events:none"
    );
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    window.addEventListener(
      "resize",
      function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      true
    );
  }
  var context = canvas.getContext("2d");

  setTimeout(function () {
    while (particles.length < maxParticleCount)
      particles.push(resetParticle({}, width, height));

    (function runAnimation() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      updateParticles();
      drawParticles(context);
      requestAnimFrame(runAnimation);
    })();
  }, 150);

  function resetParticle(particle, width, height) {
    particle.color = colors[(Math.random() * colors.length) | 0];
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = 0;
    return particle;
  }

  function drawParticles(context) {
    var particle;
    var x;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      context.beginPath();
      context.lineWidth = particle.diameter;
      context.strokeStyle = particle.color;
      x = particle.x + particle.tilt;
      context.moveTo(x + particle.diameter / 2, particle.y);
      context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
      context.stroke();
    }
  }

  function updateParticles() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var particle;
    waveAngle += 0.01;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      particle.tiltAngle += particle.tiltAngleIncrement;
      particle.x += Math.sin(waveAngle);
      particle.y +=
        (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
      particle.tilt = Math.sin(particle.tiltAngle) * 15;

      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        resetParticle(particle, width, height);
      }
    }
  }
})();

// for typing animation:

new TypeIt("#companionMethods", {
  speed: 50,
  waitUntilVisible: true,
})
  .type("<em>Happy Birthday My Dear Sona Bou 💝💘🍬🥳🎂🍫😇💙</em>")
  .break({ delay: 500 })
  .break({ delay: 500 })
  .type("<em>life er protita muhurto khub khub khub khusite thako sob sopno puron koro ami always tomar pase achi as a Best Friend , as a gurdian as a life partner as a tumi jerom vabe chao serom vabe tomar pase achi tumi sudhu happy thako ei vabe sara jibon jokhon i kono somossa hobe ami achi pase sudhu ei tuku mathay rakhbe 💙😇💘🫂👀</em>")
  .break({ delay: 500 })
  .type("<em>Ar ajke din ta khub khub khusi thako joto ja kharap vabna ajke jano kichu na ase ajke puro din ta khub khub khub khub khusi thako 🥳💘🫂😇💙👀</em>")
  .break({ delay: 500 })
  .type("<em>abero sona subho jonmodin go sona 🍬💙👀💘😇🫂🥳💝 tomar sathe amr prothom jonmodin ami chai tomar sathe arom i 7 jonmo erom kore proti bochor jonmo din palon korte chai 🫂💘👀😘😘 sona bou amr 💘😘🫂🥳 </em>")
  .break({ delay: 500 })
  .type("<em>ei vabe amra sara jibon raga ragi hasi dhukko moja sob kore katabo  ak sathe hate haat  sudhu tumi ar ami 🫂😘🫱🏼‍🫲🏽💙💝🍬</em>")
  .break({ delay: 500 })
  .type("<em>Happy happy birthday to you my dear sona bou Farha..  💘😘🫂🥳💝🩵💝💓💗💟</em>")
  .go();

