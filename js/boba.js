// Interaction with base tea, topping, and ice options

// Element for base tea display
const baseTeaImage = document.querySelector("#baseTeaImage");

// Element for topping display
const topping0 = document.querySelector(".bubble-tea-image0");
const topping1 = document.querySelector(".bubble-tea-image1");
const topping2 = document.querySelector(".bubble-tea-image2");
const topping3 = document.querySelector(".bubble-tea-image3");
const topping4 = document.querySelector(".bubble-tea-image4");

// Element for ice level display
const iceImageElement = document.querySelector(".bubble-tea-image5");

// Save and update topping as user click through
let toppingList = [];

// The counter used for replacing the earliest topping with the most recent one
let currentTopping = -1;

// Update base tea image to the one user clicked
function baseTeaChange(baseTea) {
    baseTeaImage.src = 'images/base/' + baseTea + '.png';
    console.log("base tea changed")
}

// Update topping with what user choose
function toppingChange(topping) {
    currentTopping++;

    // If there are less than 5 topping selected, then replace corresponding placeholder image
    if (toppingList.length < 5) {
        toppingList[currentTopping] = topping;
        console.log(toppingList);
        console.log(currentTopping);
    }

    // if there are more than 5
    // then replace the earliest topping with the recent one, i.e. replace topping #1 with topping #6
    // so that there will always be at most 5 toppings in the the cup
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
    console.log("topping changed")
}

// function to translate topping to the corresponding file path
function toppingToPath(topping) {
    return 'images/topping/' + topping + '.png'
}

// Update the ice level with what users clicked
function iceChange(ice) {
    if (ice=='No-ice') {
        iceImageElement.src = 'images/topping/place-holder.png';
    }
    else {
        iceImageElement.src = 'images/ice/' + ice + '-display.png';

    }
    console.log("ice change");
}