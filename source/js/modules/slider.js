import Swiper, {Pagination} from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 100,
});

export {swiper};
