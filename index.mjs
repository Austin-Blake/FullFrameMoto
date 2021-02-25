import anime from './node_modules/animejs/lib/anime.es.js';

const hero = document.getElementsByClassName('freedom');


const cafeRacer = document.getElementById('caferacer');
const soloTree = document.getElementById('solo-tree');
const orangeTank = document.getElementById('orange-tank');
const sideViewCone = document.getElementById('side-view-cone');
const frontViewCone = document.getElementById('front-view-cone');
const frontWheelie1 = document.getElementById('front-wheelie1');
const backWheelie = document.getElementById('back-wheelie');
const frontWheelie2 = document.getElementById('front-wheelie2');

const freedom = anime({
    targets: hero,
    translateY: [-1000, 0],
    rotate: '1turn',
    endDelay: 1000,
    direction: "alternate",
    duration: 2000,
    rotate: [135, 0],
    autoplay: false,
    delay: anime.stagger(160),
    
});

document.addEventListener('scroll', freedom.play);

anime({
    targets: [
        cafeRacer,
        soloTree,
        orangeTank,
        sideViewCone,
        frontViewCone,
        frontWheelie1,
        backWheelie,
        frontWheelie2,
    ],
    opacity: [.5, 0, .5, 1],
    duration: 5000,
    delay: anime.stagger(300),
    endDelay: 2000,
    easing: 'easeOutInSine',
    loop: true,
});

const jug = document.getElementById('jug');

anime({
    targets: jug,
    rotate: [0, -30, 30, -15, 15, 0],
    easing: 'easeInQuad',
    duration: 4000,
    delay: 5000,
    loop: true,
});


