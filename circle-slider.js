'use strict';

const circleSlider = {
  container: '.circle-slider',
  raise: 1.75,
  shownTag: 'h3',
  shown: 5,
  maxHeight: 0, // checkMinShownTag()
  lineHeight: 0, // checkMinShownTag()
  checkMinShownTag: function () {
    let els = [];
    els = [5000]; // sorry pls
    const shownEls = document.querySelectorAll(this.container + ' ' + this.shownTag);
    shownEls.forEach((el) => {
      els.push(el.offsetHeight);
    });
    const minHeight = Math.min(...els);

    // get first shownTag margin and set full height to lineHeight
    const styles = window.getComputedStyle(document.querySelector(this.container + ' ' + this.shownTag));
    this.lineHeight = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']) + minHeight;

    // set max height for all shownTag elements
    this.maxHeight = minHeight;
    shownEls.forEach((el) => {
      // console.log(el);
      el.style.maxHeight = `${minHeight}px`;
    });
  },
  calcLeft: function () {
    // calc chord
    const chordLength = this.lineHeight * this.shown;
    const radius = chordLength * this.raise;
    console.log(chordLength);
    console.log(radius);
  },
  init: function () {
    this.checkMinShownTag();
    this.calcLeft();
    console.log(this);
  },
};

const cSlider = Object.create(circleSlider);
cSlider.container = '.list';
console.log(cSlider);
cSlider.init();
