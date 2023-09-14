let showHidden = document.getElementsByClassName("showHidden");
let unHide = document.getElementsByClassName("unHide");
let toggle = document.getElementsByClassName("toggle")
for (let i = 0; i < showHidden.length; i++) {
  const maxHeightVal = "1200px"

  showHidden[i].addEventListener("click", (e) => {
    e.preventDefault();
    for (let j = 0; j < showHidden.length; j++) {
      // We have a condition where we are checking if the current element is in expanded state or not 
      // &&
      // We are excluding the clicked element
      if (unHide[j].style.maxHeight === maxHeightVal && unHide[i] !== unHide[j]) {
        unHide[j].style.maxHeight = "0"
        toggle[j].style.transform = "rotate(0)"
      }
    }

    const isShown = unHide[i].style.maxHeight === maxHeightVal

    if (!isShown) {
      unHide[i].style.maxHeight = maxHeightVal
      toggle[i].style.transform = "rotate(180deg)"
    } else {
      unHide[i].style.maxHeight = "0"
      toggle[i].style.transform = "rotate(0)"
    }
  })
}

let img = document.getElementsByTagName("img");
let previous = document.getElementsByTagName("button")[0];
let next = document.getElementsByTagName("button")[1];

let whichImage = document.getElementsByClassName("whichImage");

// function() {}
// () => {}

class Slider {
  sliderImages = document.querySelectorAll('img[data-role="image-slider-item"]'); // length = 3 // 0, 1, 2
  // currentImage = this.sliderImages[0];
  intervalId = 0;

  startInterval() {
    this.intervalId = setInterval(() => {
      // console.log("hello")
      this.move(false)()
    }, 2000)
  }

  move(isPrev, fromEvent) {
    return () => {
      if(fromEvent) clearInterval(this.intervalId);
      // If the currentImage is first or last we should not execute it further according to the argument "isPrev"
      // if(this.currentImage === this.sliderImages[isPrev ? 0 : this.sliderImages.length - 1]) return;

      this.sliderImages.forEach((sliderImage) => {
        const currentPosition = parseInt(sliderImage.dataset.currentPosition);
        sliderImage.style.transitionProperty = 'all';

        // Increase/Decrease the current position of the image element by 1 according to the argument "isPrev"
        const newPosition = currentPosition + (isPrev ? 1 : -1);
        sliderImage.dataset.currentPosition = newPosition.toString();

        // Updating the currentImage
        // if(newPosition === 0) this.currentImage = sliderImage;

        // Update the transform property for the image element
        sliderImage.style.transform = `translateX(${newPosition * 100}%)`
      })

      // Edge cases
      // When we are on the last, we should push the first image in the next position
      // We are checking if we are at the last image or not just by checking that if we have the next image in place.
      // And we can check if the next image in place by, checking the "data-current-position" attribute if we have any image that has the value 1 then it means the next image is waiting in its place.
      const nextImage = document.querySelector(`img[data-role="image-slider-item"][data-current-position="1"]`)
      const isOnLast = !nextImage;
      // We have two condition - isOnLast(self explanatory) && !isPrev
      // !isPrev - We are gonna fall into this block only if this method is triggered by next button
      if(isOnLast && !isPrev) {
            // console.log('isOnLast - ');
        // Selecting the first image by a logic explained below
        // Let's say We have 3 images
        // And we are at the last
        // so our data-current-position will be looking like - "-2" "-1" "0"
        // We need to get the first image and the first image holds -2 i.e, (length of the images - 1) = 2 to the negative results in -2.
        const firstImageInTheBuffer = document.querySelector(`img[data-role="image-slider-item"][data-current-position="-${this.sliderImages.length - 1}"]`);
        // We are positioning the first image to the next image's position i.e, data-current-position=1 and transform=translateX(100%), so that we can have smooth transition.
        firstImageInTheBuffer.dataset.currentPosition = '1';
        firstImageInTheBuffer.style.transitionProperty = 'none';
        firstImageInTheBuffer.style.transform = `translateX(100%)`
      }

      // When we are on the first, we should push the last in the prev position
      // We are checking if we are at the first image or not, just by checking that if we have the previous image in place.
      // And we can check if the prev image in place by, checking the "data-current-position" attribute if we have any image that has the value -1 then it means the prev image is waiting in its place.
      const prevImage = document.querySelector(`img[data-role="image-slider-item"][data-current-position="-1"]`)
      const isOnFirst = !prevImage;
      // We have two condition - isOnFirst(self explanatory) && isPrev
      // isPrev - We are gonna fall into this block only if this method is triggered by previous button
      if(isOnFirst && isPrev) {
        // Selecting the last image by a logic explained below
        // Let's say We have 3 images
        // And we are at the first
        // so our data-current-position will be looking like - "0" "1" "2"
        // We need to get the first image and the first image holds 2 i.e, (length of the images - 1) = 2.
        const lastImageInTheBuffer = document.querySelector(`img[data-role="image-slider-item"][data-current-position="${this.sliderImages.length - 1}"]`);
        // We are positioning the last image to the next image's position i.e, data-current-position=-1 and transform=translateX(-100%), so that we can have smooth transition.
        lastImageInTheBuffer.dataset.currentPosition = '-1';
        lastImageInTheBuffer.style.transitionProperty = 'none';
        lastImageInTheBuffer.style.transform = `translateX(-100%)`
      }

      if(fromEvent) this.startInterval();
    }
  }
}

// let sliderImages = document.querySelectorAll('img[data-role="image-slider-item"]'); // length = 3 // 0, 1, 2
// // console.log('sliderImages - ', sliderImages);
// let currentImage = sliderImages[0];
// function handleNextImage() {
//   if(currentImage === sliderImages[sliderImages.length - 1]) return;
//
//   sliderImages.forEach((sliderImage, index) => {
//     // console.log('sliderImage - ', sliderImage, index);
//     const currentPosition = parseInt(sliderImage.dataset.currentPosition);
//     console.log('sliderImage - ', sliderImage, currentPosition);
//
//     // Decrease the current position of the image element by 1
//     const newPosition = currentPosition - 1;
//     sliderImage.dataset.currentPosition = newPosition.toString();
//
//     // Updating the currentImage
//     if(newPosition === 0) currentImage = sliderImage;
//
//     // Update the transform property for the image element
//     sliderImage.style.transform = `translateX(${newPosition * 100}%)`
//   })
// }
// function handlePrevImage() {
//   if(currentImage === sliderImages[0]) return;
//
//   sliderImages.forEach((sliderImage, index) => {
//     // console.log('sliderImage - ', sliderImage, index);
//     const currentPosition = parseInt(sliderImage.dataset.currentPosition);
//     console.log('sliderImage - ', sliderImage, currentPosition);
//
//     // Decrease the current position of the image element by 1
//     const newPosition = currentPosition + 1;
//     sliderImage.dataset.currentPosition = newPosition.toString();
//
//     // Updating the currentImage
//     if(newPosition === 0) currentImage = sliderImage;
//
//     // Update the transform property for the image element
//     sliderImage.style.transform = `translateX(${newPosition * 100}%)`
//   })
// }

const slider = new Slider();

slider.startInterval();

next.addEventListener('click', slider.move(false, true));
previous.addEventListener('click', slider.move(true, true));

  // UPARROW
  let scrollUp = document.getElementById("scrollUp");
  
  scrollUp.style.display = "block";



    // let header = document.getElementsByTagName("header")[0]

    // SCROLL TO 

    // let showBar = document.getElementsByClassName("showBar")[0]
    // showBar.addEventListener("click",()=>{
    //     showBar.scrollTo()
    // showBar.scrollTo({
    //     top:10000,
    //     left:0,
    //     behavior:"smooth",

    // });

    // if(showBar.style.color = "")
    // showBar.style.color="red"

// }) 
