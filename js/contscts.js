const block = document.querySelector('.scrol' );
const width = document.querySelector('body').clientWidth
console.log(width)


// загрузка карты
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
 	if (!loadMapBlock.classList.contains('_loaded')) {
 		getMap();
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


 // получаем положения блока с картой
 function getMap() {
 	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
 	if (pageYOffset > loadMapBlockPos - windowHeight) {
 		const loadMapUrl = loadMapBlock.dataset.map;
 		if (loadMapUrl)
 			loadMapBlock.insertAdjacentHTML(
 				"beforeend",
 				`<iframe src="${loadMapUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
 				);
 		loadMapBlock.classList.add('_loaded')
 	}
 }


getMap()



// функции для вызова при клике которые прокручивают обьекты
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
// 		left: 180,
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
			const animStart = 10;


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