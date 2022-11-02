$(".swap-btn").click(function(){
    const swapFrom = $(".swap-from").html();
    const swapTo = $(".swap-to").html();

    $(".swap-from").html(swapTo)  
    $(".swap-to").html(swapFrom)  
    
})
let slider = '';
$(document).ready(function() {
    if(document.querySelector("#game-cards-crsl")){
        slider = $('#game-cards-crsl').lightSlider({
            autoWidth:true,
            loop:false,
            controls: false,
            // autoWidth: false,
            slideMargin: 40,
            responsive : [
            {
                breakpoint:992,
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
            setTimeout(()=>{
                $('#game-cards-crsl').removeClass('cS-hidden');
                // $('.lSPager').prepend("<span class='me-2 mb-2 btn-slider-nav btn-slide-prev text-white'><img src='./assets/images/icons/arrow-slide-left.png' ></span>")
                // $('.lSPager').append("<span class='ms-2 mb-2 btn-slider-nav btn-slide-next text-white'> <img src='./assets/images/icons/arrow-slide-right.png'></span>")
                if(window.innerWidth<480){
                    $(".slide-card-btn a").html("Only Supports Desktop Browser")
                    $(".slide-card-btn a").addClass("disabled")
                }
                else{

                }
            },2000)
        } 
        });
    }  
});

const sliUp = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("slide-up")
        }
        else{
            e.target.classList.remove("slide-up")
        }
    })
})
const sliDown = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("slide-down")
        }
        else{
            e.target.classList.remove("slide-down")
        }
    })
})
const fadeUp = new IntersectionObserver((el)=>{
    el.forEach((e) =>{
        if(e.isIntersecting){
            e.target.classList.add("fade-up")
        }
        else{
            e.target.classList.remove("fade-up")
        }
    })
})
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

const slideUp = document.querySelectorAll(".slideUp")
const slideDown = document.querySelectorAll(".slideDown")
const fadeInDown = document.querySelectorAll(".fadeInDown")
const fadeInUp = document.querySelectorAll(".fadeInUp")
const fadeInRight = document.querySelectorAll(".fadeInRight")
const fadeInLeft = document.querySelectorAll(".fadeInLeft")
const fadein = document.querySelectorAll(".fadeIn")

slideUp.forEach((el) => sliUp.observe(el))
slideDown.forEach((el) => sliDown.observe(el))
fadeInDown.forEach((el) => fadeDown.observe(el))
fadeInUp.forEach((el) => fadeUp.observe(el))
fadeInRight.forEach((el) => fadeRight.observe(el))
fadeInLeft.forEach((el) => fadeLeft.observe(el))
fadein.forEach((el) => fadeIn.observe(el))

$(window).bind("load",function(){
    setTimeout(()=>{
        if(document.getElementById("banner-bg-vid")){
            var vid = document.getElementById("banner-bg-vid");
            vid.play();
        }
        $('.lSPager').prepend("<span class='me-2 mb-2 btn-slider-nav btn-slide-prev text-white'><img src='./assets/images/icons/arrow-slide-left.png' ></span>")
        $('.lSPager').append("<span class='ms-2 mb-2 btn-slider-nav btn-slide-next text-white'> <img src='./assets/images/icons/arrow-slide-right.png'></span>")
        
        $(".btn-slide-prev").click(()=>{
            slider.goToPrevSlide();
        })
        $(".btn-slide-next").click(()=>{
            slider.goToNextSlide();
        })
        
    },3000)
})

$(".connect-wallet-btn").click((e)=>{
    e.preventDefault();
    $(".swap-amount-con").removeClass("d-none");
})
let sapling1 = -40;
let sapling2 = -40;
let click1 = 0
let click2 = 0
$(".cloud-img-con.cloud-1").click(function(e){
    click1++
    if(click1<=6 && sapling1 < 0){
        $(this).next().find('.drop-1').css({"opacity": "1","animation-name": "waterDrop1"})
        $(this).next().find('.drop-2').css({"opacity": "1","animation-name": "waterDrop2"})
        $(this).next().find('.drop-3').css({"opacity": "1","animation-name": "waterDrop3"})
        setTimeout(() => {
            if(sapling1 <=0  && click1<=6){
                sapling1=sapling1+6;
                if(click1 == 6){
                    sapling1=0
                }
                $(this).next().next().find(".sapling").css({"bottom": sapling1+"%"})
            }
            else{
                sapling1=0;
                $(this).next().next().find(".sapling").css({"bottom": sapling1+"%"})
            }
            setTimeout(() => {
                $(this).next().find('.drop-1').css({"opacity": "0","animation-name": "fadeOut"})
                $(this).next().find('.drop-2').css({"opacity": "0","animation-name": "fadeOut"})
                $(this).next().find('.drop-3').css({"opacity": "0","animation-name": "fadeOut"})
            }, 100);
        }, 2600);
    }
    else if(click1 > 6){
        sapling1=0;
        // $(this).next().next().find('.shit').css({"opacity": "1","animation-name": "waterDrop1"})
        $(this).next().find('.drop-1').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-2').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-3').css({"opacity": "0","animation-name": "none"})
        setTimeout(() => {
            $(this).next().next().find(".sapling").css({"bottom": sapling1+"%"})
        }, 1600);
        // setTimeout(() => {
        //     $(this).next().next().find(".flower-petal").css({"opacity": "1"})
        // }, 1910);
    }
    // setTimeout(() => {
    //     click1 = 0
    // }, 2000);
    
})
$(".cloud-img-con.cloud-2").click(function(e){
    click2++
    if(click2<=6 && sapling2 < 0){
        $(this).next().find('.drop-1').css({"opacity": "1","animation-name": "waterDrop1"})
        $(this).next().find('.drop-2').css({"opacity": "1","animation-name": "waterDrop2"})
        $(this).next().find('.drop-3').css({"opacity": "1","animation-name": "waterDrop3"})
        setTimeout(() => {
            if(sapling2 <=0  && click2<=6){
                sapling2=sapling2+6;
                if(click2 == 6){
                    sapling2=0
                }
                $(this).next().next().find(".sapling").css({"bottom": sapling2+"%"})
            }
            else{
                sapling2=0;
                $(this).next().next().find(".sapling").css({"bottom": sapling2+"%"})
            }
            setTimeout(() => {
                $(this).next().find('.drop-1').css({"opacity": "0","animation-name": "fadeOut"})
                $(this).next().find('.drop-2').css({"opacity": "0","animation-name": "fadeOut"})
                $(this).next().find('.drop-3').css({"opacity": "0","animation-name": "fadeOut"})
            }, 100);
        }, 2600);
    }
    else if(click2 > 6){
        sapling2=0;
        // $(this).next().next().find('.shit').css({"opacity": "1","animation-name": "waterDrop1"})
        $(this).next().find('.drop-1').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-2').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-3').css({"opacity": "0","animation-name": "none"})
        setTimeout(() => {
            $(this).next().next().find(".sapling").css({"bottom": sapling2+"%"})
        }, 1600);
        // setTimeout(() => {
        //     $(this).next().next().find(".flower-petal").css({"opacity": "1"})
        // }, 1910);
    }
    // setTimeout(() => {
    //     click2 = 0
    // }, 2000);
    
})
$(".shit-icon").click(()=>{
    console.log("clicked")
    if(click1>= 6 && click2 >= 6){
        $(".shit-icon").css({"animation-name": "dropShit"})
        setTimeout(() => {
            $(".flower-petal").css({"opacity": "1"})
        }, 4100);
    }
})