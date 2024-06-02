let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.2 + '%';
    bird1.style.top = value * -1.2 + 'px';
    bird1.style.left = value * 1.7 + 'px';
    bird2.style.top = value * -1.2 + 'px';
    bird2.style.left = value * -4.7 + 'px';
    btn.style.marginTop = value * 1.2 + 'px';
    rocks.style.top = value * 0.9 + 'px';
    forest.style.top = value * 0.22 + 'px';
    header.style.top = value * 0.5 + 'px';
});