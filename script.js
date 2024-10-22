const tile1 = document.querySelector('.tile1');
const tile2 = document.querySelector('.tile2');
const tile3 = document.querySelector('.tile3');


tile1.addEventListener('click', () => {
tile1.classList.toggle('expanded');
tile1.style.marginTop = '50px';
});

tile2.addEventListener('click', () => {
tile2.classList.toggle('expanded');
tile2.style.marginTop = '50px';
});

tile3.addEventListener('click', () => {
tile3.classList.toggle('expanded');
tile3.style.marginTop = '50px';
});