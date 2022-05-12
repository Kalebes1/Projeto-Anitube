const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

window.onload = function(){
    document.querySelector(".icone-menu").addEventListener("click",function(){
        if(document.querySelector(".menuHeader").style.display == 'block'){
            document.querySelector(".menuHeader").style.display = 'none';
        }else{
            document.querySelector(".menuHeader").style.display = 'block';
        }
    });
    document.querySelector(".menuHeader .menuClose").addEventListener("click",function(){
        if(document.querySelector(".menuHeader").style.display == 'block'){
            document.querySelector(".menuHeader").style.display = 'none';
        }else{
            document.querySelector(".menuHeader").style.display = 'block';
        }
    });
    
};

let Sliders = document.querySelectorAll('.anime-area').length;
let totalSlides = Sliders - 5;

console.log(totalSlides)
let currentSlide = 0;


document.querySelector('.sliders').style.width = `calc(100% * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.main-animes').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
    

}
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();
}
function updateMargin(){
    let sliderItemWidth = document.querySelector('.anime-area').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.sliders').style.marginLeft = `-${newMargin}px`
}
setInterval(goNext, 5000)






