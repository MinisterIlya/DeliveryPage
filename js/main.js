let cartButton = document.querySelector('#card-button'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    cansel = document.querySelector('.cansel');


let arr = [close, cansel];

cartButton.addEventListener('click', function() {
    modal.classList.add('is-open');
})
for (let i = 0; i <=  arr.length; i++) {
    arr[i].addEventListener('click', function () {  
        modal.classList.remove('is-open');
    })
}

new WOW().init();
