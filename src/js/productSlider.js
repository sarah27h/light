import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.products__slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  nav: false,
  gutter: 30,
  responsive: {
    699: {
      items: 2,
      nav: false,
      fixedWidth: 400,
    },
  },
  controls: true,
  mouseDrag: true,
  autoplayButtonOutput: false,
  controlsText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
});
