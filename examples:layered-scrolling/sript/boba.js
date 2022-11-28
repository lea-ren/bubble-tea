const baseTeaImage = document.querySelector("#baseTeaImage");
const topping0 = document.querySelector(".bubble-tea-image0");
const topping1 = document.querySelector(".bubble-tea-image1");
const topping2 = document.querySelector(".bubble-tea-image2");
const topping3 = document.querySelector(".bubble-tea-image3");
const topping4 = document.querySelector(".bubble-tea-image4");
let toppingList = [];
let currentTopping = -1;
function baseTeaChange(baseTea) {
    baseTeaImage.src = 'images/base/' + baseTea + '.png';
    console.log("base tea changed")
}

function toppingChange(topping) {
    currentTopping++;
    if (toppingList.length < 5) {
        toppingList[currentTopping] = topping;
        console.log(toppingList);
        console.log(currentTopping);
    }
    else {
        toppingList[currentTopping % 5] = topping;
    }
    switch(currentTopping % 5) {
        case 0:
            topping0.src = toppingToPath(topping);
            break;
        case 1:
            topping1.src = toppingToPath(topping); 
            break;  
        case 2:
            topping2.src = toppingToPath(topping); 
            break; 
        case 3:
            topping3.src = toppingToPath(topping); 
            break; 
        case 4:
            topping4.src = toppingToPath(topping); 
            break; 
    }
}

function toppingToPath(topping) {
    return 'images/topping/' + topping + '.png'
}