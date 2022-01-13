
$(function(){
    let slide = $('.businessContainer').find('ul'),
        slides = slide.find('li'),
        currentIdx = 0,
        slideCount = slides.length,
        
        prevBnt = $('.prev'),
        nextBnt = $('.next');
    

      // 앞뒤로 슬라이드 붙이기
      const firstClone = slides[0].cloneNode(true);
      const lastClone = slides[slideCount - 1].cloneNode(true);

      firstClone.id = 'first-clone'
      lastClone.id = 'last-clone'

      slide.append(firstClone);
      slide.prepend(lastClone);


      // console.log(slideWidth);



      // ul마다 너비가 다르기 때문에 개별 li 너비 적용하기
      for(let i =1; i<=slide.length; i++){
        let newUl = $(`.sliderin${i}`);
            currentSlide = newUl.find('li'),
            slideWidth = currentSlide.width(),
            newSlideCount = currentSlide.length;
            newWidth = slideWidth*newSlideCount+'px';

              // console.log(newUl);
              // console.log(currentSlide);
              // console.log(slideWidth);
              // console.log(newWidth);
              
            newUl.css({width:newWidth});
            newUl.css({transform:`translateX(${-slideWidth}px)`});
            newUl.addClass('animate');

            function moveSlide(num){
              newUl.each(function(){
                $(this).animate({left:slideWidth * -num + 'px'},500);
              });
            }
            
          


                
      }
            
      // 좌우버튼 슬라이드 작업
      nextBnt.click(function(){
        moveSlide(currentIdx + 1);
      });
      prevBnt.click(function(){
        moveSlide(currentIdx - 1);
      });
      
      

      
  


});

