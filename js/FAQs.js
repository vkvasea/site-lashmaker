
// события клик для вызова функций 
const coll = document.getElementsByClassName("collapsible");

$(function () {
    // открыть меню
    $('.header_burger').click(function () {
        $('.header_burger, .header_menu').toggleClass('activ')
    });
    // блокировка скролла когда открыто меню
    $('.header_burger').click(function () {
        $('body').toggleClass('lock')
    });

    $('.buttom_actuv').click(function () {
        $('.header_burger, .header_menu').removeClass('activ')
    });

    $('.buttom_actuv').click(function () {
        $('body').removeClass('lock')
    });

});


let linkBut = document.getElementsByClassName('link_active-show')
let locations = window.location.href




// открываем енопку если адресс ссылки совпадает

function addclass () {
  if ((locations == "https://www.katylashbrow.ru/FAQs/" + '#link_active') || (locations == "https://katylashbrow.ru/FAQs/" + '#link_active')) {
document.addEventListener('DOMContentLoaded', function() { // когда весь HTML загружен

  setTimeout(function() { // таймер-планировщик
    document.getElementById('btn-click').click(); // вызвать клик на кнопку
  }, 500); // через две секунды

  });

  }
};

addclass()

  


let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;


      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        let animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('show');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')){
         animItem.classList.remove('show');
        }
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  const showAnimations = setTimeout(animOnScroll, 300);
  showAnimations;
}