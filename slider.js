export const slider = function(){
 const track = document.querySelector('.track'),
      sliderArr = document.querySelectorAll('.slider__item').length - 1,
      sliderItem = document.querySelector('.slider__item').offsetWidth,
      prev = document.querySelector('.prev'),
      next= document.querySelector('.next');

let position = 0;
prev.addEventListener('click', () =>{
    position == 0 ? position = sliderItem * sliderArr : position -= sliderItem;
    track.style.transform = `translate(-${position}px)`
});
next.addEventListener('click', () =>{
    position == sliderItem * sliderArr  ?  position = 0 : position += sliderItem;
    track.style.transform = `translate(-${position}px)`
});

}