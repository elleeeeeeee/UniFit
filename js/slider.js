// Video
var videoLink = document.getElementById("video_id");

function scrollBtn(){
    videoLink.style.top = -1100 + "px";
}


// Menu
var navClickCounter = 0;
var headerLogo = document.getElementById('header-logo');
var searchClickCounter = 0;
var navInput = document.getElementById('nav-input');

function menuUnhide(){
    if (navClickCounter == 0){
        document.getElementById('nav').style.left = 0 + '%';
        navClickCounter = 1;
        navInput.style.left = -20 + '%';
        searchClickCounter = 0;
        titleHide();
        navLink();
    }
    else if(navClickCounter == 1){
        document.getElementById('nav').style.left = -100 + '%';
        navClickCounter = 0;
        navLinkDelete();
        titleUnHide();
    }
}

function inputUnhide(){
    if (searchClickCounter == 0){
        navInput.style.left = 50 + 'px';
        searchClickCounter++;
    }
    else{
        navInput.style.left = -20 + '%';
        searchClickCounter--;
    }
}

function navLinkMargin(){
    document.getElementById('nav-link').style.marginRight = '30px';
    document.getElementById('nav-link-1').style.marginRight = '30px';
    document.getElementById('nav-link-2').style.marginRight = '30px';
    document.getElementById('nav-link-3').style.marginRight = '30px';
    document.getElementById('nav-link-4').style.marginRight = '30px';
}

function navLinkMarginUnset(){
    document.getElementById('nav-link').style.marginRight = '0px';
    document.getElementById('nav-link-1').style.marginRight = '0px';
    document.getElementById('nav-link-2').style.marginRight = '0px';
    document.getElementById('nav-link-3').style.marginRight = '0px';
    document.getElementById('nav-link-4').style.marginRight = '0px';
}

function headerLogoUnHide(){
    headerLogo.style.display = 'flex';
}

function headerLogoHide(){
    headerLogo.style.display = 'none';
}

function titleHide(){
    setTimeout(headerLogoHide, 500);
}

function titleUnHide(){
    setTimeout(headerLogoUnHide, 500);
}

function navLink(){
    setTimeout(navLinkMargin, 500);
}
function navLinkDelete(){
    setTimeout(navLinkMarginUnset, 500);
}


// Slider
var sliderBody = document.getElementById('slider-body');
var slideOffset = 0;

timeoutFunc();

function nextSlide(){
    slideOffset += 100;
    if (slideOffset > 600) {
        slideOffset = 0;
    }
    sliderBody.style.left = -slideOffset + '%';
    timeoutFunc();
}

function timeoutFunc(){ 
    setTimeout(nextSlide, 10000);
}

function prevSlide(){
    slideOffset -= 100;
    if (slideOffset < 0) {
        slideOffset = 600;
    }
    sliderBody.style.left = -slideOffset + '%';
}



// Scroll

function homeScroll(){
    window.scrollTo(0, 0);
}
function aboutScroll(){
    window.scrollTo(0, 1020);
}
function newScroll(){
    window.scrollTo(0, 2200);
}
function contactScroll(){
    window.scrollTo(0, 3500);
}