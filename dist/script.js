const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const slides = document.getElementById('slides');
const slides2 = document.getElementById('slides2');
const imgLength = slides.children.length;
let slidIndex = imgLength - 1;
let slid2Index = 0;
const upToDown = (index) => {
    if (index >= imgLength) {
        slidIndex = 0;
    }
    else if (index < 0) {
        slidIndex = imgLength - 1;
    }
    else {
        slidIndex = index;
    }
    slides.style.transform = `translateY(${-slidIndex * 100}%)`;
};
const downToUp = (index) => {
    if (index >= imgLength) {
        slid2Index = 0;
    }
    else if (index < 0) {
        slid2Index = imgLength - 1;
    }
    else {
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
export {};
//# sourceMappingURL=script.js.map