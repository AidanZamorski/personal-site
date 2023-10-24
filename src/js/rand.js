
const imageList = [
    "./img/rand/Castle.jpg",
    "./img/rand/Mountain.jpg",
    "./img/rand/Gdansk.jpg",
    "./img/rand/Paintings.jpg"
];

const tiltList = [
    "-2deg",
    "-1deg",
    "1deg",
    "2deg"
];

window.onload = (function () {
    //Randomized Image Code
    const chosenImg = imageList[Math.floor(imageList.length * Math.random())];
    var imgElement = document.createElement("img");
    imgElement.src = chosenImg;
    imgElement.style.display = 'block';
    imgElement.style.maxWidth = '100%';
    imgElement.alt = "In Poland";
    imgElement.className = "image";

    let imgWrapper = document.getElementById('image-wrapper');
    imgWrapper.appendChild(imgElement);

    //Randomized Image Tilt Code
    const chosenTilt = tiltList[Math.floor(tiltList.length * Math.random())];
    imgWrapper.style.setProperty('--photo-tilt', chosenTilt);
});