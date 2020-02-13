//`mouseover`  
const signUp = document.querySelectorAll('.btn')

const firstBtn = signUp[0]
const secondBtn = signUp[1]
const thirdBtn = signUp[2]

firstBtn.addEventListener('mouseover', (event) => {
    event.target.style.color = "purple";
})

secondBtn.addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
})

thirdBtn.addEventListener('mouseover', (event) => {
    event.target.style.color = "black";
})

//`dblclick`, `stopPropagation`
const bg = document.querySelector('body');
const dest = document.querySelectorAll('.destination div');

bg.addEventListener('dblclick', (event) => {
    event.target.style.background = 'grey';
    event.stopPropagation();
})

const twoClickEventHandler = (event) => {
    event.target.style.background = 'teal';
    event.stopPropagation();
}

dest[0].addEventListener('dblclick', twoClickEventHandler);
dest[1].addEventListener('dblclick', twoClickEventHandler);
dest[2].addEventListener('dblclick', twoClickEventHandler);

//`wheel`, `preventDefault()`
const topText = document.querySelector('.intro img')
let scale = 1;

topText.addEventListener('wheel', (event) => {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    topText.style.transform = `scale(${scale})`;
})

//`resize`, `mouseenter`
const imgContent = document.querySelectorAll('.img-content');

const enterEventHandler = (event) => {
    event.target.style.transform = "scale(1.3)";
    event.target.style.transform = "all 0.3s";
}

imgContent[0].addEventListener('mouseenter', enterEventHandler);
imgContent[1].addEventListener('mouseenter', enterEventHandler);

//`mouseleave`
const leaveEventHandler = (event) => {
    event.target.style.transform = "scale(1)";
}

imgContent[0].addEventListener('mouseleave', leaveEventHandler);
imgContent[1].addEventListener('mouseleave', leaveEventHandler);


//`mousemove`
const textSpin = document.querySelector('.content-destination img');

const spinEventHandler = (event) => {
    event.target.style.transform = "skew(30deg)";
}

textSpin.addEventListener('mousemove', spinEventHandler);
// `focus`, `blur`
//`load`