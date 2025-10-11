import './style.css';
class Slider {
  constructor(scrollerSelector, imgSelector, leftBtn, rightBtn) {
    this.scroller = document.querySelectorAll(scrollerSelector);
    this.images = document.querySelectorAll(imgSelector);
    this.buttonLeft = document.querySelector(leftBtn);
    this.buttonRight = document.querySelector(rightBtn);

    this.currentTarget = document.querySelector(`${scrollerSelector}.active`);
    this.currentImgTarget = document.querySelector(`${imgSelector}.visible`);

  }


  init() {
    this.updateButtons();
    this.buttonLeft.addEventListener("click", () => this.move(-1));
    this.buttonRight.addEventListener("click", () => this.move(1));
    this.scroller.forEach(li => {
      li.addEventListener("click", () => this.switchTo(li));
    });
  }

  updateButtons() {
    const id = parseInt(this.currentTarget.id);
    this.buttonLeft.classList.toggle("hide", id === 1);
    this.buttonRight.classList.toggle("hide", id === this.scroller.length);
  }

  switchTo(li) {
    this.currentTarget.classList.remove("active");
    this.currentImgTarget.classList.remove("visible");

    li.classList.add("active");
    this.currentImgTarget = document.querySelector(`img[id="${li.id}"]`);
    this.currentImgTarget.classList.add("visible");
    this.currentTarget = li;

    this.updateButtons();
  }

  move(direction) {
    const newId = parseInt(this.currentTarget.id) + direction;
    if (newId < 1 || newId > this.scroller.length) return;
    const li = document.querySelector(`li[id="${newId}"]`);
    this.switchTo(li);
  }
}

const slider = new Slider("li", "img", "button.left", "button.right");
slider.init();