/*var menuS = document.querySelector('[data-js="menuJs"]');
menuS.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('menuActive');
});*/
function myFunction() {
    document.getElementById('menuId').classList.toggle('menu-active');

};

window.addEventListener('scroll', () => {
    let slide = document.getElementById('home');
    let slideDiv = slide.getElementsByTagName('div');
    for (let i = 0; i < slideDiv.length; i++) {
        console.log(i);
        slideDiv[i].style.transform = 'translateY(-' + (window.pageYOffset * i / slideDiv.length) + 'px)';
    }
    /*for (let i of slide) {
        i.style.transform = 'translateY(-' + (1000 * i / slide.length) + 'px)'
    }*/


}, false);