
window.onload = () => {
    startSetTimeoutAnimation();
  };
  
  function startSetTimeoutAnimation() {
    console.log("Testing");

    const refreshRate = 1000 / 20;
    const maxOpacity = 1;
    let stars = document.getElementById('star1');
    let fade = .1;
    let opac = 0;
  
    window.setInterval(() => {
      opac = opac + fade;
      if (opac > maxOpacity || opac < 0) {
        fade = fade * (-1);
      }
      stars.style.opacity = opac;
    }, refreshRate);
  }

//   function startAnimFrameAnimation() {
//     const refreshRate = 1000 / 60;
//     const maxXPosition = 400;
//     let rect = document.getElementById('rect1');
//     let speedX = 1;
//     let positionX = 0;
  
//     function step() {
//       positionX = positionX + speedX;
//       if (positionX > maxXPosition || positionX < 0) {
//         speedX = speedX * (-1);
//       }
//       rect.style.left = positionX + 'px';
//       window.requestAnimationFrame(step);
//     }
  
//     window.requestAnimationFrame(step);
//   }
  


// var requestAnimationFrame = window.requestAnimationFrame;

// var stars = document.getElementByClass("smallStar");
// var currentOpacity = 1;

// function animateStars(){
//     currentOpacity -= .1;
//     stars.style.opacity = currentOpacity;

//     requestAnimationFrame(animateStars);
// }
// animateStars();

// document.getElementById("mountain").addEventListener("lower", mouseIn);

// function mouseOver() {
//   document.getElementById("demo").style.color = "red";
// }

// function lower{
//     document.getElementById("mountain");
//     x.style.bottom = "-50px";
//   }
  
//   function normal(x) {
//     x.style.bottom = "0px";
//   }