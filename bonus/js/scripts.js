console.log('int ok')

const srcImg = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];
const slides = document.querySelector('.slides');
let currentSlide = 0

for(let i=0 ; i < srcImg.length; i++){
 slides.innerHTML += `<div class="slide"><img src="${srcImg[i]}"></div>`;
  //console.log(srcImg[currentSlide]);
}

console.log('slides',slides,typeof slides);

const allSlide = document.querySelectorAll('.slide');

console.log('allSlide',allSlide,typeof allSlide);

allSlide[0].classList.add('active');

const before = document.querySelector('.before');
const after = document.querySelector('.after');

after.addEventListener('click',

  function(){
    if( currentSlide < (srcImg.length - 2)){
      allSlide[currentSlide].classList.remove('active');
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide ++;
      
      allSlide[currentSlide].classList.add('active');
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    else{
      allSlide[currentSlide].classList.remove('active');
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide = 0;
      
      allSlide[currentSlide].classList.add('active');
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    
    /*before.classList.remove('ms-d-none');
    
    if(currentSlide == allSlide.length -1){
      after.classList.add('ms-d-none');
    }*/
    
  }

)

before.addEventListener('click',

  function(){
    if(currentSlide > 0){
      allSlide[currentSlide].classList.remove('active');
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide --;
      
      allSlide[currentSlide].classList.add('active');
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    else{
      allSlide[currentSlide].classList.remove('active');
      console.log('allSlide prima',allSlide[currentSlide],typeof allSlide);
      
      currentSlide = srcImg.length -1;
      
      allSlide[currentSlide].classList.add('active');
      console.log('allSlide dopo',allSlide[currentSlide],typeof allSlide);
    }
    
    /*after.classList.remove('ms-d-none');
    
    if(currentSlide == 0){
      before.classList.add('ms-d-none');
    }*/
  }

)