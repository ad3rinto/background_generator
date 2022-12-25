var css = document.querySelector('h3');
var colour1 = document.querySelector('.colour1')
var colour2 = document.querySelector('.colour2')
var body = document.querySelector('body')

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + colour1.value + ", " 
    + colour2.value + ")";

}

colour1.addEventListener('input',setGradient )

colour2.addEventListener('input', setGradient)