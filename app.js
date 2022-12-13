const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')


slides.forEach((slide, indx)=>{
    slide.style.left = `${indx * 100}%`
})

let counter = 0;

nextBtn.addEventListener('click', ()=>{
    counter++;
    sliderFn();
})

prevBtn.addEventListener('click', ()=>{
    counter--;
    sliderFn();
})

function sliderFn(){
    prevBtn.style.display= 'block'
    nextBtn.style.display = 'block';

    if(counter === slides.length - 1){
        nextBtn.style.display ='none';
        prevBtn.style.display = 'block'
    }

    if(counter === 0){
        nextBtn.style.display = 'block';
        prevBtn.style.display='none';
    }

    slides.forEach(slide=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

prevBtn.style.display = 'none'