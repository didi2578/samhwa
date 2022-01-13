


$(document).ready(function(){
      
      let SHOWING_CLASS = 'showing';
      let slides = $('.tSlide li');
      let imgDiv = $('.titleImg .img');
      let slideCount = slides.length;
      let tap = $('ul.tap li');
            
      let currentIdx = 0;


        console.log(slides);

        slides.eq(currentIdx).addClass(SHOWING_CLASS);
        imgDiv.eq(currentIdx).addClass(SHOWING_CLASS);
        tap.eq(currentIdx).addClass('circlerot');


        function slide(){
          let nextIdx = (currentIdx + 1)%slideCount;

          slides.eq(currentIdx).removeClass(SHOWING_CLASS);
          imgDiv.eq(currentIdx).removeClass(SHOWING_CLASS);
          
          slides.eq(nextIdx).addClass(SHOWING_CLASS);
          imgDiv.eq(nextIdx).addClass(SHOWING_CLASS);

          currentIdx = nextIdx;

          updateNav();
          tapClick();


          function tapClick(){
            tap.click(function(){
            let idx = $(this).index();
            
            idx=currentIdx;
            });
          }
        }

        setInterval(slide,4200);

        function updateNav(){
          tap.eq(currentIdx).addClass('circlerot')
          .siblings().removeClass('circlerot');
          }
        
              


  });

  







