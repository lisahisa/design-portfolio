// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".lisahisamura");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });

const lisahisamura = document.querySelector('.lisahisamura');
const subhead = document.querySelector('.subhead');
const oval = document.querySelector('.oval');
const port = document.querySelector('.port');
const folio = document.querySelector('.folio');
// const container = document.querySelector('.container');
const topp = document.querySelector('.top');

window.onscroll = () => {
if (window.scrollY > 1) {
    lisahisamura.classList.add('lisahisamura-active');
    subhead.classList.add('subhead-active');
    oval.classList.add('oval-active');
    port.classList.add('port-active');
    folio.classList.add('folio-active');
    // container.classList.add('container-active');
    topp.classList.add('top-active');
    // top.classList.add('top-active');
} else {
    lisahisamura.classList.remove('lisahisamura-active');
    subhead.classList.remove('subhead-active');
    oval.classList.remove('oval-active');
    port.classList.remove('port-active');
    folio.classList.remove('folio-active');
    // container.classList.remove('container-active');
    topp.classList.remove('top-active');
    // top.classList.remove('top-active');
}
};

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
const elementTop = el.getBoundingClientRect().top;

return (
elementTop <=
(window.innerHeight || document.documentElement.clientHeight) / dividend
);
};

const elementOutofView = (el) => {
const elementTop = el.getBoundingClientRect().top;

return (
elementTop > (window.innerHeight || document.documentElement.clientHeight)
);
};

const displayScrollElement = (element) => {
element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
scrollElements.forEach((el) => {
if (elementInView(el, 1.25)) {
    displayScrollElement(el);
} else if (elementOutofView(el)) {
    hideScrollElement(el)
}
})
}

window.addEventListener("scroll", () => { 
handleScrollAnimation();
});


// work thumbnail stuff

window.onload = turnOnPrint();
turnOnPrint();


// function turnOnPrint() {
//     if (document.getElementById('print-thumbnails')) {

//         if (document.getElementById('print-thumbnails').style.visibility == 'hidden') {
//             document.getElementById('print-button').style.color = '#C57C8E';
//             document.getElementById('print-thumbnails').style.visibility = 'visible';
//             document.getElementById('print-thumbnails').style.opacity = '1';

//             document.getElementById('digital-thumbnails').style.visibility = 'hidden';
//             document.getElementById('digital-thumbnails').style.opacity = '0';
//             document.getElementById('digital-button').style.color = 'black';

//             document.getElementById('uiux-thumbnails').style.visibility = 'hidden';
//             document.getElementById('uiux-thumbnails').style.opacity = '0';
//             document.getElementById('uiux-button').style.color = 'black';

//         }
//         else {
//             document.getElementById('print-thumbnails').style.visibility = 'hidden';
//             document.getElementById('print-thumbnails').style.opacity = '0';

//             document.getElementById('digital-thumbnails').style.visibility = 'visible';
//             document.getElementById('digital-thumbnails').style.opacity = '1';
//         }
//     }
// }

function turnOnPrint() {
    if (document.getElementById('print-thumbnails')) {

        if (document.getElementById('print-thumbnails').style.visibility == 'hidden') {
            document.getElementById('print-button').style.color = '#C57C8E';
            document.getElementById('print-thumbnails').style.visibility = 'visible';
            document.getElementById('print-thumbnails').style.opacity = '1';

            document.getElementById('digital-button').style.color = 'black';
            document.getElementById('digital-thumbnails').style.visibility = 'hidden';
            document.getElementById('digital-thumbnails').style.opacity = '0';

            document.getElementById('uiux-button').style.color = 'black';
            document.getElementById('uiux-thumbnails').style.visibility = 'hidden';
            document.getElementById('uiux-thumbnails').style.opacity = '0';

        }
        else {
            document.getElementById('print-thumbnails').style.visibility = 'hidden';
            document.getElementById('print-thumbnails').style.opacity = '0';

            // document.getElementById('digital-thumbnails').style.visibility = 'visible';
            // document.getElementById('digital-thumbnails').style.opacity = '1';
   
        }
    }
};

function turnOnDigital() {
    if (document.getElementById('digital-thumbnails')) {

        if (document.getElementById('digital-thumbnails').style.visibility == 'hidden') {
            document.getElementById('digital-button').style.color = '#C57C8E';
            document.getElementById('digital-thumbnails').style.visibility = 'visible';
            document.getElementById('digital-thumbnails').style.opacity = '1';

            document.getElementById('print-button').style.color = 'black';
            document.getElementById('print-thumbnails').style.visibility = 'hidden';
            document.getElementById('print-thumbnails').style.opacity = '0';

            document.getElementById('uiux-button').style.color = 'black';
            document.getElementById('uiux-thumbnails').style.visibility = 'hidden';
            document.getElementById('uiux-thumbnails').style.opacity = '0';

        }
    }
};

function turnOnUIUX() {
    if (document.getElementById('uiux-thumbnails')) {

        if (document.getElementById('uiux-thumbnails').style.visibility == 'hidden') {
            document.getElementById('uiux-button').style.color = '#C57C8E';
            document.getElementById('uiux-thumbnails').style.visibility = 'visible';
            document.getElementById('uiux-thumbnails').style.opacity = '1';

            document.getElementById('digital-button').style.color = 'black';
            document.getElementById('digital-thumbnails').style.visibility = 'hidden';
            document.getElementById('digital-thumbnails').style.opacity = '0';

            document.getElementById('print-button').style.color = 'black';
            document.getElementById('print-thumbnails').style.visibility = 'hidden';
            document.getElementById('print-thumbnails').style.opacity = '0';

        }
    }
};

// function turnOnPrint() {
//     if (document.getElementById('print-thumbnails')) {

//         if (document.getElementById('print-thumbnails').style.visibility == 'hidden') {
//             document.getElementById('print-button').style.color = '#C57C8E';
//             document.getElementById('print-thumbnails').style.visibility = 'visible';
//             document.getElementById('print-thumbnails').style.opacity = '1';

//             document.getElementById('digital-button').style.color = 'black';
//             document.getElementById('digital-thumbnails').style.visibility = 'hidden';
//             document.getElementById('digital-thumbnails').style.opacity = '0';

//             document.getElementById('uiux-button').style.color = 'black';
//             document.getElementById('uiux-thumbnails').style.visibility = 'hidden';
//             document.getElementById('uiux-thumbnails').style.opacity = '0';

//         }
//     }
// };



// function turnOnPrint() {
//     if (document.getElementById('print-thumbnails').style.visibility == 'hidden') {
        
//         if (document.getElementById('digital-thumbnails').style.visibility == 'visible') {
//             document.getElementById('digital-thumbnails').style.visibility = 'hidden';
//             document.getElementById('digital-thumbnails').style.opacity = '0';
//             document.getElementById('print-thumbnails').style.visibility = 'visible';
//             document.getElementById('print-thumbnails').style.opacity = '1';
//         }

//         else if (document.getElementById('uiux-thumbnails').style.visibility == 'visible') {
//             document.getElementById('uiux-thumbnails').style.visibility = 'hidden';
//             document.getElementById('uiux-thumbnails').style.opacity = '0';
//             document.getElementById('print-thumbnails').style.visibility = 'visible';
//             document.getElementById('print-thumbnails').style.opacity = '1';
//         }
        
//     }
// };



