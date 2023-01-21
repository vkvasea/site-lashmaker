
// находим обьект чьим скролом нужно управлять и определяем ширину окна чтобы знать сколько видео нужно прокрутить
const block = document.querySelector('.scrol' );
const width = document.querySelector('body').clientWidth
const height = document.querySelector('body').clientHeight
console.log(height)

// lazy loading
const lazyImages = document.querySelectorAll('img[data-src], sourse[dsta-srcset]');
 const loadMapBlock = document.querySelector('._load-map'); 
 const windowHeight = document.documentElement.clientHeight;

// проверка положения массива на странице
 let lazyImagesPositions = [];

 if (lazyImages.length > 0) {
    lazyImages.forEach(img => {

        if (img.dataset.src || img.dataset.srcset) {
            // вставляем в массив положение каждого изображения
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    });
 }


// определение позиции видимого экрана
 window.addEventListener("scroll", lazyScroll);
// вызываем lazyScrollCheck если видим обьекты
 function lazyScroll() {
    if (document.querySelectorAll('img[data-src], sourse[dsta-srcset]').length > 0) {
        lazyScrollCheck();
    }
 }

// проверка докрутили ли мы до обьекта
 function lazyScrollCheck() {
    // ищем индекс в массиве
    let imgIndex = lazyImagesPositions.findIndex(
        // когда обьект появляется присваиваем индекс
        item => pageYOffset > item - windowHeight
        );
    // если нашли
    if (imgIndex >= 0 ) {

        if (lazyImages[imgIndex].dataset.src) {
            // подставляем вместобутофорной картинки, путь к реальной картинке
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            // удаляем бутафорную картинку
            lazyImages[imgIndex].removeAttribute('data-src');

        } else if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute('data-srcset');
    
        }
        // очистить ячейку с позицией данного обьекта
        delete lazyImagesPositions[imgIndex];
    }
 }

// анимация

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


  
// галерея
$(".gallery-list").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true
      }
    });


// слайдер

const swiper = new Swiper('.image-slider', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   dynamicBullets: true,

  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },


  
  autoHeight: true,
  
  slidesPerView: 3,
  zoom: true,

  slidesPerGroup: 3,

  
  breakpoints: {
    0: {
      slidesPerView: 1,
       slidesPerGroup: 1,
    },
    766: {
      slidesPerView: 2,
       slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
       slidesPerGroup: 3,
    }
  },


  preloadImages: true,
  // Enable lazy loading
  lazy: {
    loadOnTransitionStart:true,
    loadPrevNext:true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

});

// // функции для вызова при клике которые прокручивают обьекты
// function setElementScrollByLeft(){
// 	if(width > 1170){
// 	block.scrollBy({
// 		top:0,
// 		left: 750,
// 		behavior: "smooth"
// 	});
// 	} else if(width < 1170 && width >970){
// 	block.scrollBy({
// 		top:0,
// 		left: 500,
// 		behavior: "smooth"
// 	});	
// 	} else if (width < 970){
// 	block.scrollBy({
// 		top:0,
// 		left: 250,
// 		behavior: "smooth"
// 	});	
// 	}
// };

// function setElementScrollByRight(){
	
// 	if(width > 1170){
// 	block.scrollBy({
// 		top:0,
// 		left: -750,
// 		behavior: "smooth"
// 	});
// 	} else if(width < 1170 && width >970){
// 	block.scrollBy({
// 		top:0,
// 		left: -500,
// 		behavior: "smooth"
// 	});	
// 	} else if (width < 970){
// 	block.scrollBy({
// 		top:0,
// 		left: -250,
// 		behavior: "smooth"
// 	});	
// 	}
// };

const vid1 = document.getElementById("video1");
const vid2 = document.getElementById("video2");
const vid3 = document.getElementById("video3");
const vid4 = document.getElementById("video4");
const vid5 = document.getElementById("video5");
const vid6 = document.getElementById("video6");
const vid7 = document.getElementById("video7");
const vid8 = document.getElementById("video8");
const vid9 = document.getElementById("video9");
const vid10 = document.getElementById("video10");
const vid11 = document.getElementById("video11");
const vid12 = document.getElementById("video12");

vid1.onplay = function() {
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid2.onplay = function() {
    vid1.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid3.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid4.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid5.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid6.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid7.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid8.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid9.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid10.pause();
    vid11.pause();
    vid12.pause();
};
vid10.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid11.pause();
    vid12.pause();
};
vid11.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid12.pause();
};
vid12.onplay = function() {
	vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid7.pause();
    vid8.pause();
    vid9.pause();
    vid10.pause();
    vid11.pause();
};


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










// попапы

// получаем классы
// открывает все обекты с данным классом
const popupLinks = document.querySelectorAll('.popup-link'); 
// получаем боди для блокировки скрола
const body = document.querySelector('body');

const lockPadding = document.querySelectorAll(".lock-padding");

// для того чтобы небыло двойных нажатий 
let unlock = true;

// блокировка скрола
const timeout = 0;

// проверка
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        // вешаем событие
        popupLink.addEventListener("click", function(e) {
            // берем значение href, убираем значение хэш и получаем чистое имя
            const popupName = popupLink.getAttribute('href').replace('#', ''); 
            // получаем элемент ид которого равен popupName
            const curentPopup = document.getElementById(popupName);
            // полученный обьект отправляем в функцию
            popupOpen(curentPopup);
            // запрещаем перезагружать страницу
            e.preventDefault();
        });
    }
}

// функция для обьектов которая будет закрывать попапы
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e){
            // отправляем в функцию обьект который является ближайшим родителем нажатой ссылки 
            popupClose(el.closest('.popup'));
              // запрещаем перезагружать страницу
            e.preventDefault();
        });
      }
}


// // функция открытия попапа
// // передаем в функцию готовый обьект
// function popupOpen(curentPopup) {
//     // проверяем есть ли обьект и открыта ли переменная онлок
//     if(curentPopup && unlock && (width > 575) && (height > 575) ) {
//         // получить открытый попап 
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             // если он существует то закрыть его
//             popupClose(popupActive, false);
//         } else {
//             // иначе блочим скролл боди
//             bodyLock();
//         }
//         // добавляем попапу класс опен
//         curentPopup.classList.add('open');
//         // открытому попапу вешаем событие
//         curentPopup.addEventListener("click", function (e){
//             // если у нажатого обьекта нету в родителе обьекта с классом попап тогда попап закрываем
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }

// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');
//         if (doUnlock) {
//             bodyUnLock();
//         }
//     }
// }


// // чтобы небыло сдвига контента выщитываем ширину экрана и добавляем ширину полосы прокрутки при активации попапа
// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// if (lockPadding.length > 0){
//      for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = lockPaddingValue;
//      }
//  }
// // присваиваем значение ширины прокрутки ввиде паддинга для боди
//      body.style.paddingRight = lockPaddingValue;
//      body.classList.add('lock');

//      unlock = false;
//      setTimeout(function(){
//         unlock = true;
//      }, timeout);
// }


// function bodyUnLock() {
//     setTimeout( function(){
//         if (lockPadding.length > 0){
//              for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//              }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);
//     unlock = false;
//     setTimeout(function(){
//         unlock = true;
//     }, timeout);
// }

// document.addEventListener('keydown', function (e){
//     if (e.which === 27){
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// });


// (function(){
//     if(!Element.prototype.closest) {
//         Element.prototype.closest = function (css) {
//             var node = this;
//             while (node) {
//                 if (node.matches(css)) return node;
//                 else node = node.parentElement;
//             }
//             return null;
//         };
//     }
// })();
// (function () {
//     if(!Element.prototype.matches) { 

//         Element.prototype.matches = Element.prototype.matchesSelector ||
//             Element.prototype.webkitMatchesSelector ||
//             Element.prototype.mozMatchesSelector ||
//             Element.prototype.msMatchesSelector;
//     }
// })();