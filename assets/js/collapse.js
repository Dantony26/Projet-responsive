// Handler that uses various data-* attributes to trigger
// specific actions, mimicing bootstraps attributes
const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener('click', (ev) => {
  const elm = ev.target;
  if (triggers.includes(elm)) {
    const selector = elm.getAttribute('data-target');
    collapse(selector, 'toggle');
  }
}, false);


const fnmap = {
  'toggle': 'toggle',
  'show': 'add',
  'hide': 'remove'
};
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
}


window.onscroll = function() {myFunction()};

var navi = document.getElementById("navbar");
var sticky = navi.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navi.classList.add("sticky");
  } else {
    navi.classList.remove("sticky");
  }
}