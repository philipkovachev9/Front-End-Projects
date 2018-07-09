var imageArray = [
    './images/image-slider1.jpg',
    './images/image-slider2.jpg',
    './images/image-slider3.jpg',
];

var index = 0;
imageDuration = 6000;

function slideShow() {
    document.getElementById('image').src = imageArray[index];
    index++;
    if (index == imageArray.length) {
        index = 0;
    }
    setTimeout('slideShow()', imageDuration);
}
slideShow();