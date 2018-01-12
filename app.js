const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    //console.log(this);
    //e.stopPropagation(); // stop bubbling! this plus capture:false will grab the top event listener on the way down not the one you clicked necessarily.
    console.log(this.classList.value);
  }
  //capture: true means grabbing and running the event handlers as the browser captures them on the way down. False runs them after the have been grabbed and from the bottom up. False is default.
  divs.forEach(div => div.addEventListener('click', logText, { capture: false, once: true })); //once remove the event handler after one use. It removes every one it the tree it grabs via propigation.
  button.addEventListener('click', () => console.log("click!"),  { once: true });
