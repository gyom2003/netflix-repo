
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

//car6
function rightScroll6(carouse6, rightArrow6) {
    const scroll = document.querySelector(carouse6);
    const right = document.querySelector(rightArrow6);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll6(carousel6, leftArrow6) {
    const scroll = document.querySelector(carousel6);
    const left = document.querySelector(leftArrow6);
    scroll.scrollLeft -= scroll.offsetWidth;

}

//car7
function rightScroll7(carouse7, rightArrow7) {
    const scroll = document.querySelector(carouse7);
    const right = document.querySelector(rightArrow7);
    scroll.scrollLeft += scroll.offsetWidth;

}

function leftScroll7(carousel7, leftArrow7) {
    const scroll = document.querySelector(carousel7);
    const left = document.querySelector(leftArrow7);
    scroll.scrollLeft -= scroll.offsetWidth;

}

//car8
function rightScroll8(carousel8, rightArrow8) {
    const scroll = document.querySelector(carousel8);
    const right = document.querySelector(rightArrow8);
    scroll.scrollLeft += scroll.offsetWidth;
}

function leftScroll8(carousel8, leftArrow8) {
    const scroll = document.querySelector(carousel8);
    const left = document.querySelector(leftArrow8);
    scroll.scrollLeft -= scroll.offsetWidth;
}

//car9
function rightScroll9(carousel9, rightArrow9) {
    const scroll = document.querySelector(carousel9);
    const right = document.querySelector(rightArrow9);
    scroll.scrollLeft += scroll.offsetWidth;
}

function leftScroll9(carousel9, leftArrow9) {
    const scroll = document.querySelector(carousel9);
    const left = document.querySelector(leftArrow9);
    scroll.scrollLeft -= scroll.offsetWidth;
}


//car10
function rightScroll10(carousel10, rightArrow10) {
    const scroll = document.querySelector(carousel10);
    const right = document.querySelector(rightArrow10);
    scroll.scrollLeft += scroll.offsetWidth;
}

function leftScroll10(carousel10, leftArrow10) {
    const scroll = document.querySelector(carousel10);
    const left = document.querySelector(leftArrow10);
    scroll.scrollLeft -= scroll.offsetWidth;
}

//car11
function rightScroll11(carousel11, rightArrow11) {
    const scroll = document.querySelector(carousel11);
    const right = document.querySelector(rightArrow11);
    scroll.scrollLeft += scroll.offsetWidth;
}

function leftScroll11(carousel11, leftArrow11) {
    const scroll = document.querySelector(carousel11);
    const left = document.querySelector(leftArrow11);
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
        var randomRef = Math.floor(Math.floor(math.random*theimg.length));   
        document.getElementById("random" + i.toString()).src = theimg(randomRef);
        // console.log(randomRef); 
        // var result = theimg[randomRef].toString();
        // console.log(result);
    }  
}

window.onload = randomImg;

function settheVideo() {
    document.getElementById("thevideo").src="./assets/video.mp4"

}