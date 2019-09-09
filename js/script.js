function myFunction() {
    document.getElementById('menuId').classList.toggle('menu-active');

};

window.addEventListener('scroll', () => {
    let slide = document.getElementById('home');
    let slideDiv = slide.getElementsByTagName('div');
    for (let i = 0; i < slideDiv.length; i++) {
        console.log(i);
        slideDiv[i].style.transform = 'translateY(-' + (window.pageYOffset * i / slideDiv.length) + 'px)';
        if (i == 2) {
            slideDiv[i].style.transform += 'rotate(-' + (window.pageYOffset / 50) + 'deg)';
        } else if (i == 4) {
            slideDiv[i].style.transform += 'rotate(' + (window.pageYOffset / 20) + 'deg) scale(1.' + (window.pageYOffset / 50) + ')';

        }
    }



}, false);