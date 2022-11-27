const baseTeaImage = document.querySelector("#baseTeaImage");

function baseTeaChange(baseTea) {
    baseTeaImage.src = 'images/base/' + baseTea + '.png';
    console.log("base tea changed")
}