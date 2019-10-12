function myFunction() {
    document.getElementById('menuId').classList.toggle('menu-active');

};

window.addEventListener('scroll', () => {
    let slide = document.getElementById('home');
    let slideDiv = slide.getElementsByTagName('div');
    let heightWindow = window.innerWidth;
    let light = 100;
    for (let i = 0; i < slideDiv.length; i++) {
        console.log(i);

        slideDiv[i].style.transform = 'translateY(-' + (window.pageYOffset * i / slideDiv.length) + 'px)';
        slideDiv[i].style.filter = 'brightness(' + (light - (window.pageYOffset / 10)) + '%)';
        if (i == 2) {
            slideDiv[i].style.transform += 'rotate(-' + (window.pageYOffset / 50) + 'deg)';
        } else if (i == 4) {
            slideDiv[i].style.transform += 'rotate(' + (window.pageYOffset / 20) + 'deg) scale(1.' + (window.pageYOffset / 50) + ')';
        }
    }
}, false);