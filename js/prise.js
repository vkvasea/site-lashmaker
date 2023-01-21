const block = document.querySelector('.scrol' );
const width = document.querySelector('body').clientWidth
const height = document.querySelector('body').clientHeight
console.log(width)
// функции для вызова при клике которые прокручивают обьекты
// function setElementScrollByLeft(){
//     if(width > 1170){
//     block.scrollBy({
//         top:0,
//         left: 750,
//         behavior: "smooth"
//     });
//     } else if(width < 1170 && width >970){
//     block.scrollBy({
//         top:0,
//         left: 500,
//         behavior: "smooth"
//     }); 
//     } else if (width < 970){
//     block.scrollBy({
//         top:0,
//         left: 180,
//         behavior: "smooth"
//     }); 
//     }
// };

// function setElementScrollByRight(){
    
//     if(width > 1170){
//     block.scrollBy({
//         top:0,
//         left: -750,
//         behavior: "smooth"
//     });
//     } else if(width < 1170 && width >970){
//     block.scrollBy({
//         top:0,
//         left: -500,
//         behavior: "smooth"
//     }); 
//     } else if (width < 970){
//     block.scrollBy({
//         top:0,
//         left: -250,
//         behavior: "smooth"
//     }); 
//     }
// };


// события клик для вызова функций 
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
// console.log(animItem.offsetHeight)









// попапы

// получаем классы
// открывает все обекты с данным классом
const popupLinks = document.querySelectorAll('.popup-link'); 
// получаем боди для блокировки скрола
const body = document.querySelector('body');
const header = document.querySelector('.container');
const lockPadding = document.querySelectorAll(".lock-padding");

// для того чтобы небыло двойных нажатий 
let unlock = true;

// блокировка скрола
const timeout = 0;



// чтобы небыло сдвига контента выщитываем ширину экрана и добавляем ширину полосы прокрутки при активации попапа
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
if (lockPadding.length > 0){
     for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
     }
 }
// присваиваем значение ширины прокрутки ввиде паддинга для боди
     body.style.paddingRight = lockPaddingValue;
     header.style.paddingRight = lockPaddingValue;
     body.classList.add('lock');

     unlock = false;
     setTimeout(function(){
        unlock = true;
     }, timeout);
}


function bodyUnLock() {
    setTimeout( function(){
        if (lockPadding.length > 0){
             for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
             }
        }
        body.style.paddingRight = '0px';
        header.style.paddingRight = '0px';
        body.classList.remove('lock');

        
    }, timeout);
    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}




(function(){
    if(!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if(!Element.prototype.matches) { 

        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

