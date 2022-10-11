// var mouse = {'x': 0, 'y': 0};

// homex = 0;
// homey = 0;
// forcex = 0;
// forcey = 0;
// magnet = 200;


// $(document).bind('mousemove', function(e) {
//     mouse = {'x': e.pageX, 'y': e.pageY};
// });


// $('.dot').each(function(index, el){
// $(el).data( "homex", parseInt($(el).position().left));
// $(el).data( "homey", parseInt($(el).position().top));
// });

// $('.dot').css('position','absolute');
// setInterval(function () {
//     $('.dot').each(function(index, el){
//         el = $(el);
//         position = el.position();
//         x0 = el.offset().left;
//         y0 = el.offset().top;
//         x1 = mouse.x;
//         y1 = mouse.y;
//         distancex = x1-x0;
//         distancey = y1-y0;

//         distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
        
        
//         magnet = 800;
//         if(distance>130) {
//            magnet=0; 
//         }
        
        
//         powerx = x0 - (distancex / distance) * magnet / distance;
//         powery = y0 - (distancey / distance) * magnet / distance;
        
//         forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
//         forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
                    

//         el.css('left', powerx + forcex);
//         el.css('top',  powery + forcey);
//     });
// }, 5);


$(".swap-btn").click(function(){
    const swapFrom = $(".swap-from").html();
    const swapTo = $(".swap-to").html();

    $(".swap-from").html(swapTo)  
    $(".swap-to").html(swapFrom)  
    
})

$(document).ready(function() {
    const slider = $('#game-cards-crsl').lightSlider({
        autoWidth:true,
        loop:true,
        item:3,
        controls: false,
        // autoWidth: false,
        slideMargin: 40,
        responsive : [
        {
            breakpoint:800,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:480,
            settings: {
                item:2,
                slideMove:1
              }
        }
    ],
    onSliderLoad: function() {
        $('#game-cards-crsl').removeClass('cS-hidden');
        $('.lSPager').prepend("<span class='me-2 mb-2 btn-slide-prev text-white'><img src='./assets/images/icons/arrow-slide-left.png' ></span>")
        $('.lSPager').append("<span class='ms-2 mb-2 btn-slide-next text-white'> <img src='./assets/images/icons/arrow-slide-right.png'></span>")

        $(".btn-slide-prev").click(()=>{
            slider.goToPrevSlide();
        })
        $(".btn-slide-next").click(()=>{
            slider.goToNextSlide();
        })
    } 
    });  
});

const fadeDown = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("fade-down")
        }
        else{
            e.target.classList.remove("fade-down")
        }
    })
})
const fadeRight = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("fade-right")
        }
        else{
            e.target.classList.remove("fade-right")
        }
    })
})
const fadeLeft = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("fade-left")
        }
        else{
            e.target.classList.remove("fade-left")
        }
    })
})
const fadeIn = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("fade-in")
        }
        else{
            e.target.classList.remove("fade-in")
        }
    })
})

const fadeInDown = document.querySelectorAll(".fadeInDown")
const fadeInRight = document.querySelectorAll(".fadeInRight")
const fadeInLeft = document.querySelectorAll(".fadeInLeft")
const fadein = document.querySelectorAll(".fadeIn")
fadeInDown.forEach((el) => fadeDown.observe(el))
fadeInRight.forEach((el) => fadeRight.observe(el))
fadeInLeft.forEach((el) => fadeLeft.observe(el))
fadein.forEach((el) => fadeIn.observe(el))