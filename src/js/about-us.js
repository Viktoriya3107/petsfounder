import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutSwiperEl = document.querySelector('.js-about-swiper');

if (aboutSwiperEl) {
  new Swiper('.js-about-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: false,
    grabCursor: true,

    navigation: {
      nextEl: '.about-swiper-next',
      prevEl: '.about-swiper-prev',
      disabledClass: 'is-disabled',
    },

    pagination: {
      el: '.about-swiper-pagination',
      clickable: true,
    },
  });
}
