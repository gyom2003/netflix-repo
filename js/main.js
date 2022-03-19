
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


