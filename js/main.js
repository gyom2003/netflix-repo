
//la fonction que j'avais faite 
function general() {

    const thebutton = document.getElementById("thebutton");
    const theimage = document.getElementById("theimageref");
    var marginref = parseInt(theimage.classList.mx) 

    thebutton.addEventListener("click", 
    function(event) {
        //chevron right sinon left
        if (marginref == 0) {
            thebutton.scrollLeft += 304;
        } else {
            thebutton.scrollLeft -= 304;
        }
    })
}


//https://github.com/Toumi6796/netflix-clone-tailwind/blob/main/index.html
function rightScroll(carousel, rightArrow) {
    const scroll = document.querySelector(carousel);
    const right = document.querySelector(rightArrow);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll(carousel, leftArrow) {
    const scroll = document.querySelector(carousel);
    const left = document.querySelector(leftArrow);
    scroll.scrollLeft -= scroll.offsetWidth;

}

function rightScroll2(carousel2, rightArrow2) {
    const scroll = document.querySelector(carousel2);
    const right = document.querySelector(rightArrow2);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll2(carousel2, leftArrow2) {
    const scroll = document.querySelector(carousel2);
    const left = document.querySelector(leftArrow2);
    scroll.scrollLeft -= scroll.offsetWidth;

}   

function rightScroll3(carousel3, rightArrow3) {
    const scroll = document.querySelector(carousel3);
    const right = document.querySelector(rightArrow3);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll3(carousel3, leftArrow3) {
    const scroll = document.querySelector(carousel3);
    const left = document.querySelector(leftArrow3);
    scroll.scrollLeft -= scroll.offsetWidth;

}


//car4
function rightScroll4(carousel4, rightArrow4) {
    const scroll = document.querySelector(carousel4);
    const right = document.querySelector(rightArrow4);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll4(carousel4, leftArrow4) {
    const scroll = document.querySelector(carousel4);
    const left = document.querySelector(leftArrow4);
    scroll.scrollLeft -= scroll.offsetWidth;

}

//car5
function rightScroll5(carousel5, rightArrow5) {
    const scroll = document.querySelector(carousel5);
    const right = document.querySelector(rightArrow5);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll5(carousel5, leftArrow5) {
    const scroll = document.querySelector(carousel5);
    const left = document.querySelector(leftArrow5);
    scroll.scrollLeft -= scroll.offsetWidth;

}


// window.onload = RandomImage1

// var type = document.getElementsByTagName("img")


// function RandomImage1(){
//     let index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random11').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random12').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random13').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random14').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random15').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random16').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random17').src = image_array1[index];

//     index = Math.floor(Math.random().image_array1.length)
//     document.querySelector('.random18').src = image_array1[index];
// }


function randomImg() {
    theimg = [

        "/assets/1.webp", 
        "/assets/2.jpg", 
        "/assets/3.png", 
        "/assets/4.jpg", 
        "/assets/5.jpeg", 
        "./assets/carouselimages/1.png", 
        "./assets/carouselimages/2.jpg", 
        "./assets/carouselimages/3.png", 
        "./assets/carouselimages/4.jpg", 
        "./assets/carouselimages/5.jpg"
    ]; 
    for(let i = 0; i < 10; i++) {
        var randomRef = theimg[math.floor(math.random*theimg.length)];   
        console.log(randomRef); 
        document.getElementById("random" + i.toString()).src=theimg[randomRef];
    }  
}

window.onload = randomImg;