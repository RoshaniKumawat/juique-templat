    <!-------------------------main-header------------------------------>

        $(document).ready(function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 10) {
                    $('.main-header').addClass('sticky');
                } else {
                    $('.main-header').removeClass("sticky");
                }
            });
        });


        $(".menu-close").click(function(){
            $(".navbar-collapse").removeClass("show");
        });

    
    
    <!-------------------------slick/slider----------------------------->

        /*$(document).ready(function(){
            $('.your-class').slick({

              dots: false,
              infinite: true,
              speed: 2000,
              fade: true,
              cssEase: 'linear'     
               
            });
        });*/

    <!-------------------------number(counter-codepen)------------------>

        /*$(document).ready(function() {

            $('.timer').each(function () {
                $(this).prop('counter',0).animate({
                    counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

        });  */
    
    <!-------------------------gallery--------------------------------->
    
        /*$('#trustgallery').lightGallery({
            selector: '.item',
            mode: 'lg-fade',
            counter: true,
            download: true,
            startClass: '',
            enableSwipe: true,
            enableDrag: true,
            speed: 500,
            thumbnail: false,
        });*/

    <!--------------------------menubar--(on click button)------------->
    
        <!---------cart button-(on click button)------------->

        function cartFunction() {
           var element = document.getElementById("JSheadercart");
           element.classList.add("show-header-cart");
        }

           <!-------remove button--(close button)------>
        function cartRK() {
           var element = document.getElementById("JSheadercart");
           element.classList.remove("show-header-cart");
        }
    
    
   <!----------------------------professional-(slick-slider-2)--------->
        

        $(document).ready(function(){
            $('.your-class-2').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplaySpeed:2000,  
                autoplay:false,
                /*infinite: true,*/
                infinite: false,
                dots: true,
                arrows:false,

                /*--slick-slider-2---(responsive)--*/

                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay:false,
                        arrows:false,
                        dots:true,
                        autoplaySpeed:2000,
                      }
                    },
                ]
            });
        });

    <!---------------------------cursor-------------------------------->
    
    const cursorRounded = document.querySelector('.rounded');
        const moveCursor = (e)=> {
          const mouseY = e.clientY;
          const mouseX = e.clientX;
           
          cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

        window.addEventListener('mousemove', moveCursor)    








    


        