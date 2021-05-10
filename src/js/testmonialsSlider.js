import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.hero__slider',
  items: 2,
  slideBy: 'page',
  autoplay: true,
  nav: false,
  gutter: 30,
  responsive: {
    699: {
      items: 2,
      nav: false,
    },
    700: {
      items: 5,
    },
  },
  controls: false,
  mouseDrag: true,
  autoplayButtonOutput: false,
});
