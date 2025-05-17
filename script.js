// 1

let images = ['url2.jpg', 'url4.jpg', 'url3.jpg'];

// 2

let slider = document.querySelector('#slider');
let indicatorList = document.querySelector('#indicatorList')
let indicators

// 3

for (let i = 0; i < images.length; i++) {
    li = document.createElement('li')
    indicatorList.appendChild(li)
    li.classList.add('indicator')
}

// 4

indicators = document.querySelectorAll('.indicator');

// 5

i = 0
slider.src = `img/${images[0]}`;
indicators[0].style.borderColor = 'red';

// 6

let btnLeft = document.querySelector('#left');
let btnRight = document.querySelector('#right');
btnLeft.addEventListener('click', (e) => {
    e.preventDefault();
    prev();
})
btnRight.addEventListener('click', (e) => {
    e.preventDefault();
    next();
})

// 7

function prev() {
    i = i - 1
    if (i < 0) {
        i = images.length - 1;
    }
    slider.src = `img/${images[i]}`;

    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';
    }
    indicators[i].style.borderColor = 'red'
}

// 8

function next() {
    i = i + 1
    if (i > images.length - 1) {
        i = 0
    }
    slider.src = `img/${images[i]}`;
    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';
    }
    indicators[i].style.borderColor = 'blue'

}






