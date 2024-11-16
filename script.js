
const content = document.querySelector('.resume-content');
const svg = document.querySelector('svg');
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', content.offsetWidth);
circle.setAttribute('cy', '0px');
circle.setAttribute('r', 150);
circle.setAttribute('fill', '#afddef');
svg.appendChild(circle)

createRandomCircle = (element) => {

}
    