
let heading = document.querySelector(`.heading`);
let btn1 = document.querySelector(`.btn1`);
let body = document.querySelector(`body`);



btn1.addEventListener(`click`, function(){
    body.classList.toggle(`dark`);
    btn1.classList.toggle(`dark-mode`)
})
