const divs = document.querySelectorAll('div');

function logText(e) {
    //console.log(this);
    e.stopPropagation(); // stop bubbling! this plus capture:false will grab the top event listener on the way down not the one you clicked necessarily.
    console.log(this.classList.value);
  }
  //capture: true means grabbing and running the event handlers as the browser captures them on the way down. False runs them after the have been grabbed and from the bottom up. False is default.
  divs.forEach(div => div.addEventListener('click', logText, { capture: false }));
  //button.addEventListener('click', logText);
