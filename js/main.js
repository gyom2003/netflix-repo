
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


//
function rightScroll(carousel, rightArrow) {
    const scroll = document.querySelector(carousel);

    const right = document.querySelector(rightArrow);
    
    right.addEventListener("click", () => {
        scroll.scrollLeft += scroll.offsetWidth;
    })
}

function leftScroll(carousel, leftArrow) {
    const scroll = document.querySelector(carousel);
    const left = document.querySelector(leftArrow);

    left.addEventListener("click", () => {
        scroll.scrollLeft -= scroll.offsetWidth;
    })
    
}