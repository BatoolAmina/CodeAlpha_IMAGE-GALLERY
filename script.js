let currentImageIndex = 0;

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image990.jpg"
];

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  
    document.getElementById("gallery-image").src = images[currentImageIndex];
  }
  
  function updateMainGallery(imageSrc) {
    document.getElementById("gallery-image").src = imageSrc;
  }
