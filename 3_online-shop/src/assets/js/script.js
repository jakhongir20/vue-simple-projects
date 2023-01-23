// $(window).ready(function () {
   // Dynamic Adapt v.1
// HTML data-da="where(uniq class name), position(digi), when(breakpoints)"
// e.x. data-da="item,2,992"

(function () {
   //@ts-ignore
   let original_positions = [];
   let da_elements = document.querySelectorAll('[data-da]');
   let da_elements_array = [];
   let da_match_media = [];
   // Заполняем массивы
   if (da_elements.length > 0) {
      let number = 0;
      for (let index = 0; index < da_elements.length; index++) {
         const da_element = da_elements[index];
         const da_move = da_element.getAttribute('data-da');
         const da_array = da_move.split(',');
         if (da_array.length == 3) {
            da_element.setAttribute('data-da-index', number);
            // Zapolnyaem massiv pervonachalniy pozitsii
            original_positions[number] = {
               "parent": da_element.parentNode,
               "index": index_in_parent(da_element)
            };
            // Zapolnyaem massiv elementov
            da_elements_array[number] = {
               "element": da_element,
               "destination": document.querySelector('.' + da_array[0].trim()),
               "place": da_array[1].trim(),
               "breakpoint": da_array[2].trim()
            }
            number++;
         }
      }
      dynamic_adapt_sort(da_elements_array);

      // Sozdaem sobitia v tochke brekpointa
      for (let index = 0; index < da_elements_array.length; index++) {
         const el = da_elements_array[index];
         const da_breakpont = el.breakpoint;
         const da_type = "max"; // Dlya MobileFirst pomenyat na min

         da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpont + "px)"));
         da_match_media[index].addListener(dynamic_adapt);

      }
   }

   // Osnovnaya funksiya
   function dynamic_adapt(e) {
      for (let index = 0; index < da_elements_array.length; index++) {
         const el = da_elements_array[index];
         const da_element = el.element;
         const da_destination = el.destination;
         const da_place = el.place;
         const da_breakpont = el.breakpoint;
         const da_classname = "_dynamic_adapt_" + da_breakpont;

         if (da_match_media[index].matches) {
            // Perebrasivaem elementi
            if (!da_element.classList.contains(da_classname)) {
               let actual_index;
               if (da_place == 'first') {
                  actual_index = index_of_elements(da_destination)[0];
               } else if (da_place == 'last') {
                  actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
               } else {
                  actual_index = index_of_elements(da_destination)[da_place];
               }
               da_destination.insertBefore(da_element, da_destination.children[actual_index]);
               da_element.classList.add(da_classname);
            }
         } else {
            // Vozvrashaet na mesto
            if (da_element.classList.contains(da_classname)) {
               dynamic_adapt_back(da_element);
               da_element.classList.remove(da_classname);
            }
         }
      }
      custom_adapt();
   }

   // Vizov osnovnoi funksii
   dynamic_adapt();

   // Funksia vozvrat na mesto
   function dynamic_adapt_back(el) {
      const da_index = el.getAttribute('data-da-index');
      const original_place = original_positions[da_index];
      const parent_place = original_place['parent'];
      const index_place = original_place['index'];
      const actual_index = index_of_elements(parent_place, true)[index_place];
      parent_place.insertBefore(el, parent_place.children[actual_index]);
   }

   // Funksia polucheniya indeksa vnutri roditelya
   function index_in_parent(el) {
      var children = Array.prototype.slice.call(el.parentNode.children);
      return children.indexOf(el);
   }

   // Funksia polucheniya massiva indeksov elementov vnutri roditelya
   function index_of_elements(parent, back) {
      const children = parent.children;
      const children_array = [];
      for (let i = 0; i < children.length; i++) {
         const children_element = children[i];
         if (back) {
            children_array.push(i);
         } else {
            // Isklyuchaya perenesenniy element
            if (children_element.getAttribute('data-da') == null) {
               children_array.push(i);
            }
         }
      }
      return children_array;
   }

   // Sortirovka obekta
   function dynamic_adapt_sort(arr) {
      arr.sort(function (a, b) {
         if (a.breakpoint > b.breakpoint) {
            return -1
         } else {
            return 1
         } // Dlya MobileFirst pomenyat
      });
      arr.sort(function (a, b) {
         if (a.place > b.place) {
            return 1
         } else {
            return -1
         }
      });
   }

   // Dopolnitelniy senarii adaptatsii
   function custom_adapt() {
      const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   }

}());

// Обьявленям переменные
// const parent_original = document.querySelector('.content__blocks_city');
// const parent = document.querySelector('.content__column_river');
// const item = document.querySelector('.content__block_item');

// Слушаем изменение размера экрана
// window.addEventListener('resize', function (event) {
// 	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// 	if (viewport_width < 992) {
// 		if (!item.classList.contains('done')) {
// 			parent.insertBefore(item, parent.children[2]);
// 			item.classList.add('done');
// 		}
// 	} else {
// 		if (item.classList.contains('done')) {
// 			parent_original.insertBefore(item, parent_original.children[2]);
// 			item.classList.remove('done');
// 		}
// 	}
// });

// })




document.documentElement.addEventListener('click', function (e) {
   if (!e.target.closest('.arrow-one')) {
      const one = document.querySelector('.one');
      const arrow1 = document.querySelector('.arrow-one');
      if (one && arrow1) {
         one.classList.remove('open');
         arrow1.classList.remove('_active');
      }
   }
});
document.documentElement.addEventListener('click', function (e) {
   if (!e.target.closest('.arrow-two')) {
      const two = document.querySelector('.two')
      const arrow2 = document.querySelector('.arrow-two');
      if (two && arrow2) {
         two.classList.remove('open');
         arrow2.classList.remove('_active');
      }
   }
});
document.documentElement.addEventListener('click', function (e) {
   if (!e.target.closest('.arrow-three')) {
      const three = document.querySelector('.three')
      const arrow3 = document.querySelector('.arrow-three');
      if (three && arrow3) {
         three.classList.remove('open');
         arrow3.classList.remove('_active');
      }
   }
});
document.documentElement.addEventListener('click', function (e) {
   if (!e.target.closest('.account__link_select')) {
      const accountSelect = document.querySelector('.account__link_select')
      const subList = document.querySelector('.sub-account__list');
      if (accountSelect && subList) {
         subList.classList.remove('open');
         accountSelect.classList.remove('_active');
      }
   }
});
document.documentElement.addEventListener('click', function (e) {
   if (!e.target.closest('.bottom-header__cart')) {
      const cart = document.querySelector('.bottom-header__cart')
      const quickcart = document.querySelector('.quickcart');
      if (cart && quickcart) {
         quickcart.classList.remove('open');
         cart.classList.remove('_active');
      }
   }
});
//===========================================================================================================
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
   $(this).toggleClass('_active');
   $('.menu__body').toggleClass('_active');
   $('body').toggleClass('_lock');
})

$('a').on('click', function (event) {
   event.preventDefault();
});
//===========================================================================================================

//===========================================================================================================


//===========================================================================================================

//===========================================================================================================
//Fixed header
$(window).on('scroll', function () {

   if ($(this).scrollTop() > 250) {
      $('.header').addClass("sticky");
   } else {
      $('.header').removeClass("sticky");
   }
});


//===========================================================================================================

//===========================================================================================================

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};
const body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   const arrow = document.querySelectorAll('.arrow');
   for (let i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('_active');
      });
   }
} else {
   body.classList.add('mouse');
}

const accountLinkSelect = document.querySelector('.account__link_select');
const subAccountList = document.querySelector('.sub-account__list');
accountLinkSelect && accountLinkSelect.addEventListener('click', function (e) {
   subAccountList.classList.toggle('open');
})
const bottomHeaderCart = document.querySelector('.bottom-header__cart');
const quickcart = document.querySelector('.main-header__quickcart');
bottomHeaderCart && bottomHeaderCart.addEventListener('click', function (e) {
   quickcart.classList.toggle('open');
});
//===========================================================================================================

if (isMobile.any()) {
   const filterTitle = document.querySelector('.catalog-filter--responsive__title');
   if (filterTitle) {
      filterTitle.addEventListener('click', function (e) {
         filterTitle.classList.toggle('_active');
         filterTitle.nextElementSibling.classList.toggle('_active');
      });
   }
}

//===========================================================================================================






