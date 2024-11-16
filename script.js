
const content = document.querySelector('.svg-container');
const svg = document.querySelector('svg');
const body = document.querySelector('body');

svg.setAttribute('width', body.offsetWidth);
svg.setAttribute('height', body.offsetHeight);

const colorList = [
    '#8ecae6',
    '#219ebc',
    '#023047',
    '#ffb703',
    '#fb8500',
]
const raduisRange = 100;


createRandomCircle = (element) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', getRandomNumber(0, element.offsetWidth));
    circle.setAttribute('cy', getRandomNumber(0, element.clientHeight));
    circle.setAttribute('r', getRandomNumber(20, raduisRange));
    circle.setAttribute('fill', getRandomColor(colorList));
    if (svg.children.length > 100) {
        svg.removeChild(svg.children[0]);
    }
    svg.appendChild(circle);

}

getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomColor = (list) => {
    return list[getRandomNumber(0, list.length - 1)];
}

updateRandomCircle = () => { for (let i = 0; i < 25; i++) {
    createRandomCircle(content);
    }
}

updateRandomCircle();

window.onscroll = () => {
    createRandomCircle(content);
}
    