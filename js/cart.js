// Incapsulation

const cartFunction = function () {

const cartBtn = document.querySelector('.button-cart');
const cart = document.getElementById('modal-cart');
const modalCloseBtn = cart.querySelector('.modal-close')

cartBtn.addEventListener('click',function(){
    cart.style.display = "flex";
});

modalCloseBtn.addEventListener('click', function(){
    cart.style.display = "";
});

}
cartFunction();