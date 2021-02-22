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

const spin = anime.timeline({
    easing: 'easeOutQuad',
    duration: 600,    
});
spin.add({
    targets: cafeRacer,
    translateX: 20,
    translateY: 60
}).add({
        targets: soloTree,
        translateX: 0,
        translateY: 60,
        
    }).add({
        targets: orangeTank,
        translateX: -20,
        translateY: 60,
    }).add({
        targets: sideViewCone,
        translateX: 35,
        translateY: 0
    }).add({
        targets: frontViewCone,
        translateX: -35,
        translateY: 10
    }).add({
        targets: frontWheelie1,
        translateX: 15,
        translateY: -55
    }).add({
        targets: backWheelie,
        translateX: 0,
        translateY: -55
    }).add({
        targets: frontWheelie2,
        translateX: -15,
        translateY: -55
    })

document.onscroll = spin.play;

const freedom = anime({
    targets: hero,
    scale: 1.2,
    translateX: 25,
    rotate: '1turn',
    endDelay: 1000,
    direction: "alternate",
    loop: true,
  delay: anime.stagger(160) // increase delay by 100ms for each elements.
});

// document.onscroll = freedom.play;

