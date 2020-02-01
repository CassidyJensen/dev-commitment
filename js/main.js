console.log("Testing");


window.onload = () => {
    startSetTimeoutAnimation();
  };
  
  function startSetTimeoutAnimation() {
    const refreshRate = 200;
    const maxOpacity = 1;
    for(i=1; i<=9; i++){
        let stars = document.getElementById('star' + i);
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

    for(i=1; i<=8; i++){
        let stars = document.getElementById('small' + i);
        let fade = .1;
        let opac = 0;
    
        window.setInterval(() => {
        opac = opac + fade;
        if (opac > maxOpacity || opac < 0) {
            fade = fade * (-1);
        }
        stars.style.opacity = opac;
        }, refreshRate + 100);
    }

    for(i=9; i<=14; i++){
        let stars = document.getElementById('small' + i);
        let fade = .1;
        let opac = 0;
    
        window.setInterval(() => {
        opac = opac + fade;
        if (opac > maxOpacity || opac < 0) {
            fade = fade * (-1);
        }
        stars.style.opacity = opac;
        }, refreshRate + 200);
    }
  }
