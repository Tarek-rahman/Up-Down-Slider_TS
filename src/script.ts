const upBtn = document.getElementById('upBtn') as HTMLButtonElement;
const downBtn = document.getElementById('downBtn') as HTMLButtonElement;
const slides = document.getElementById('slides') as HTMLDivElement;
const slides2 = document.getElementById('slides2') as HTMLDivElement;
const imgLength: number = slides.children.length;
let slidIndex: number = imgLength - 1;
let slid2Index: number = 0;

const upToDown = (index: number) => {
  if (index >= imgLength) {
    slidIndex = 0;
  } else if (index < 0) {
    slidIndex = imgLength - 1;
  } else {
    slidIndex = index;
  }
  slides.style.transform = `translateY(${-slidIndex * 100}%)`;
};

const downToUp = (index: number) => {
  if (index >= imgLength) {
    slid2Index = 0;
  } else if (index < 0) {
    slid2Index = imgLength - 1;
  } else {
    slid2Index = index;
  }
  slides2.style.transform = `translateY(${-slid2Index * 100}%)`;
};

upBtn.addEventListener('click', () => {
  upToDown(slidIndex - 1);
  downToUp(slid2Index + 1);
});

downBtn.addEventListener('click', () => {
  upToDown(slidIndex + 1);
  downToUp(slid2Index - 1);
});

upToDown(slidIndex);
downToUp(slid2Index);
