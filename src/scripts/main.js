function ready() {
  
  var burger = document.querySelector('.header-burger');
  var burgerText = document.querySelector('.header-burger p');
  var menu = document.querySelector('.header-linklist');
  var body = document.querySelector('body');
  burger.addEventListener('click', function(){
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('overflow');
    
    if (menu.classList.contains('active')){
      burgerText.innerHTML = 'Close'
    } else {
      burgerText.innerHTML = 'Contact'
    }
  });

}

document.addEventListener("DOMContentLoaded", ready);