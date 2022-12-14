// scrollToElement(0,0)
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
                $('.slider-navigation-dots').removeClass('cS-hidden');
                // $('.lSPager').prepend("<span class='me-2 mb-2 btn-slider-nav btn-slide-prev text-white'><img src='./assets/images/icons/arrow-slide-left.png' ></span>")
                // $('.lSPager').append("<span class='ms-2 mb-2 btn-slider-nav btn-slide-next text-white'> <img src='./assets/images/icons/arrow-slide-right.png'></span>")
                if(window.innerWidth<480){
                    $(".slide-card-btn a").html("Only Supports Desktop Browser")
                    $(".slide-card-btn a").addClass("disabled")
                }
                else{

                }
            },2000)
        } ,
        onAfterSlide: function (el) {
            checkNav()
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



$(".connect-wallet-btn").click((e)=>{
    e.preventDefault();
    $(".connect-wallet-btn").hide();
    $(".purchase-token-btn").show();
    $(".swap-amount-con").removeClass("d-none");
})
let sapling1 = -40;
let sapling2 = -40;
let click = true
let clickB = true
let click1 = 1
let click2 = 1
var saplingAudio = document.querySelector(".sapling-rise-audio");
var smallFlowerAudio = document.querySelector(".small-flower-audio");
var bigFlowerAudio = document.querySelector(".big-flower-audio");
$(".cloud-img-con.cloud-1").click(function(e){
    setTimeout(() => {
        click = false
    }, 10);
    if(click1<=6 && sapling1 < 0 && click == true){
        $(this).next().find('.drop-1').css({"opacity": "1", "animation-name": "waterDrop1", "animation-duration":"1.3s"})
        $(this).next().find('.drop-2').css({"opacity": "1", "animation-name": "waterDrop2", "animation-duration":"1.1s"})
        $(this).next().find('.drop-3').css({"opacity": "1", "animation-name": "waterDrop3", "animation-duration":"1s"})
        setTimeout(() => {
            $(this).next().find('.drop-1').css({"animation-name": "waterDropFadeOut1", "animation-duration":"0.9s", "animation-delay": "0"})
            $(this).next().find('.drop-2').css({"animation-name": "waterDropFadeOut2", "animation-duration":"0.7s", "animation-delay": "0"})
            $(this).next().find('.drop-3').css({"animation-name": "waterDropFadeOut3", "animation-duration":"0.5s", "animation-delay": "0"})
            setTimeout(() => {
                if(sapling1 <=0  && click1<=6){
                    sapling1=sapling1+6;
                    if(click1 == 6){
                        sapling1=0
                    }
                    saplingAudio.play()
                    $(this).next().next().find(".sapling").css({"bottom": sapling1+"%"})
                }
                else{
                    sapling1=0;
                    $(this).next().next().find(".sapling").css({"bottom": sapling1+"%"})
                }
                click = true;
                click1++
            }, 200);
            
        }, 1200);
    }
    if(click1==6){
        setTimeout(() => {
            smallFlowerAudio.play()
            $(this).next().next().find(".flower-petal.petal-1").addClass("bounceIn")
        }, 1500);
    }
    else if(click1 > 6){
        sapling1=0;
        $(this).next().find('.drop-1').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-2').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-3').css({"opacity": "0","animation-name": "none"})
        setTimeout(() => {
            $(this).next().next().find(".sapling").css({"bottom": sapling1+"%"})
        }, 1600);
    }
})

$(".cloud-img-con.cloud-2").click(function(e){
    setTimeout(() => {
        clickB = false
    }, 10);
    if(click2<=6 && sapling2 < 0 && clickB == true){
        $(this).next().find('.drop-1').css({"opacity": "1", "animation-name": "waterDrop1", "animation-duration":"1.3s"})
        $(this).next().find('.drop-2').css({"opacity": "1", "animation-name": "waterDrop2", "animation-duration":"1.1s"})
        $(this).next().find('.drop-3').css({"opacity": "1", "animation-name": "waterDrop3", "animation-duration":"1s"})
        setTimeout(() => {
            $(this).next().find('.drop-1').css({"animation-name": "waterDropFadeOut1", "animation-duration":"0.9s", "animation-delay": "0"})
            $(this).next().find('.drop-2').css({"animation-name": "waterDropFadeOut2", "animation-duration":"0.7s", "animation-delay": "0"})
            $(this).next().find('.drop-3').css({"animation-name": "waterDropFadeOut3", "animation-duration":"0.5s", "animation-delay": "0"})
            setTimeout(() => {
                if(sapling2 <=0  && click2<=6){
                    sapling2=sapling2+6;
                    if(click2 == 6){
                        sapling2=0
                    }
                    saplingAudio.load()
                    saplingAudio.play()
                    $(this).next().next().find(".sapling").css({"bottom": sapling2+"%"})
                }
                else{
                    sapling2=0;
                    $(this).next().next().find(".sapling").css({"bottom": sapling2+"%"})
                }
                clickB = true;
                click2++
            }, 200);
            
        }, 1200);
    }
    if(click2==6){
        setTimeout(() => {
            // $(this).next().next().find(".flower-petal.petal-1").css({"animation-name": "zoomIn"})
            smallFlowerAudio.play()
            $(this).next().next().find(".flower-petal.petal-1").addClass("bounceIn")
        }, 1500);
    }
    else if(click2 > 6){
        sapling2=0;
        $(this).next().find('.drop-1').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-2').css({"opacity": "0","animation-name": "none"})
        $(this).next().find('.drop-3').css({"opacity": "0","animation-name": "none"})
        setTimeout(() => {
            $(this).next().next().find(".sapling").css({"bottom": sapling2+"%"})
        }, 1600);
    }
})



$(".shit-drop-text").click(()=>{
    if(click1>= 6 ){
        $(".shit-icon.shit-1").css({"animation-name": "dropShit1"})
        setTimeout(() => {
            // $(".flower-1 .flower-petal.petal-2").css({"animation-name": "zoomIn"})
            bigFlowerAudio.play()
            $(".flower-1 .flower-petal.petal-2").addClass("bounceIn")
            $(".flower-1 .flower-petal.petal-1").css({"animation-name": "none","opacity": "0"})
        }, 4500);
        setTimeout(() => {
            $(".flower-1 .flower-petal.petal-2").css({"animation-name": "spin","animation-duration":"13s", "animation-iteration-count": "infinite"})
        }, 5800);

    }
})

$(".shit-drop-dot").click(()=>{
    if( click2 >= 6){
        $(".shit-drop-dot").removeClass("dot-purp-d")
        $(".shit-icon.shit-2").css({"animation-name": "dropShit"})
        setTimeout(() => {
            // $(".flower-2 .flower-petal.petal-2").css({"animation-name": "zoomIn"})
            bigFlowerAudio.play()
            $(".flower-2 .flower-petal.petal-2").addClass("bounceIn")
            $(".flower-2 .flower-petal.petal-1").css({"animation-name": "none","opacity": "0"})
        }, 4500);
        setTimeout(() => {
            $(".flower-2 .flower-petal.petal-2").css({"animation-name": "spin","animation-duration":"13s", "animation-iteration-count": "infinite"})
        }, 5800);

    }
    if(window.innerWidth < 480 ){
        if(click2 >= 6){
            $(".shit-drop-dot").removeClass("dot-purp-d")
            $(".shit-icon.shit-2").css({"animation-name": "dropShit"})
            setTimeout(() => {
                $(".flower-2 .flower-petal.petal-2").css({"animation-name": "zoomIn"})
            }, 4500);
            setTimeout(() => {
                $(".flower-2 .flower-petal.petal-1").css({"animation-name": "none","opacity": "0"})
                $(".flower-2 .flower-petal.petal-2").css({"animation-name": "spin","animation-duration":"13s", "animation-iteration-count": "infinite"})
            }, 5800);
    
        }
    }
})
$(".shit-icon.shit-2").click(()=>{
    if(window.innerWidth < 480 ){
        if(click2 >= 6){
            $(".shit-drop-dot").removeClass("dot-purp-d")
            $(".shit-icon.shit-2").css({"animation-name": "dropShit"})
            console.log("clicked")
            setTimeout(() => {
                $(".flower-2 .flower-petal.petal-2").css({"animation-name": "zoomIn"})
            }, 4500);
            setTimeout(() => {
                $(".flower-2 .flower-petal.petal-1").css({"animation-name": "none","opacity": "0"})
                $(".flower-2 .flower-petal.petal-2").css({"animation-name": "spin","animation-duration":"13s", "animation-iteration-count": "infinite"})
            }, 5800);
    
        }
        
    }
})
$(".shit-drop-text").click(()=>{
    if(window.innerWidth < 480 ){
        if(click2 >= 6){
            $(".shit-drop-dot").removeClass("dot-purp-d")
            $(".shit-icon.shit-2").css({"animation-name": "dropShit"})
            console.log("clicked")
            setTimeout(() => {
                $(".flower-2 .flower-petal.petal-2").css({"animation-name": "zoomIn"})
            }, 4500);
            setTimeout(() => {
                $(".flower-2 .flower-petal.petal-1").css({"animation-name": "none","opacity": "0"})
                $(".flower-2 .flower-petal.petal-2").css({"animation-name": "spin","animation-duration":"13s", "animation-iteration-count": "infinite"})
            }, 5800);
    
        }
        
    }
})

$(".cloud-img-item.item-4").on("mouseenter",()=>{
    setTimeout(() => {
        $(".cloud-icon-item.item-4").css({"animation-name": "ball-bounce"})
    }, 500);
    setTimeout(() => {
        $(".spinner-dots").css({"animation-name": "spin-around"})
    }, 1150);
})



if(document.querySelector(".skater-anim-con")){
    const { to, set } = gsap;

        document.querySelectorAll('.skater-anim-con').forEach(loading => {
            loading.count = 0
            let lines = to(loading, {
                keyframes: [{
                    '--line-top-x': '-100%',
                    '--line-bottom-x': '-200%',
                    onComplete() {
                        set(loading, {
                            '--line-top-x': '200%',
                            '--line-bottom-x': '100%',
                        })
                    }
                }, {
                    '--line-top-x': '0%',
                    '--line-bottom-x': '0%'
                }],
                duration: 1,
                repeat: -1
            })


            const skater = document.querySelector(".skater-anim-con")
            $(".timer-border-dots-con").mouseenter(e => fast(loading, lines))
            $(".timer-border-dots-con").mouseleave(e => !loading.ouch && reset(loading, lines))
            skater.addEventListener('mouseenter', e => fast(loading, lines))
            skater.addEventListener('mouseleave', e => !loading.ouch && reset(loading, lines))
        })

        const fast = (loading, lines) => {
            if(loading.active) {
                return
            }
            loading.active = true
            loading.count += 1
            lines.timeScale(2.5)
            to(loading, {
                '--skate-x': '12px',
                duration: .3
            })
            to(loading, {
                duration: .2,
                '--arm-front': '24deg',
                '--arm-front-end': '-48deg',
                '--arm-back': '164deg',
                '--arm-back-end': '-36deg',
                '--leg-front': '-4deg',
                '--leg-front-end': '66deg',
                '--leg-back': '111deg',
                '--leg-back-end': '-36deg',
                '--board-r': '0deg',
                '--body-r': '34deg',
                '--body-y': '-53%',
                '--body-x': '-28%',
            })
        }

        const reset = (loading, lines) => {
            if(!loading.active) {
                return
            }
            to(loading, {
                '--skate-x': '0px',
                duration: .3
            })
            to(loading, {
                duration: .2,
                '--arm-front': '24deg',
                '--arm-front-end': '-48deg',
                '--arm-back': '164deg',
                '--arm-back-end': '-50deg',
                '--leg-front': '40deg',
                '--leg-front-end': '30deg',
                '--leg-back': '120deg',
                '--leg-back-end': '-36deg',
                '--board-r': '0deg',
                '--board-x': '0px',
                '--body-r': '12deg',
                '--body-y': '-65%',
                '--body-x': '-85%',
                onComplete() {
                    loading.active = false
                    lines.play()
                    lines.timeScale(1)
                }
            })
        }
        
}



const gameSlides = document.querySelectorAll(".slide-item")
const gameSlideNavs = document.querySelectorAll(".slider-nav-dot")

function checkNav(){
    gameSlides.forEach((e, index)=>{
        if(gameSlides[index].classList.contains('active')){
            $(".slider-nav-dot").removeClass("active")
            gameSlideNavs[index].classList.add("active")
        }
    })
}
gameSlideNavs.forEach((e, index)=>{
    e.addEventListener("click", function(){
        slider.goToSlide(index)
        checkNav()
    })
})

$(".timer-border-dots-con").mouseenter(function(){
    $(".border-dots .iteration").css({"animation-duration": "4s"})
})
$(".timer-border-dots-con").mouseleave(function(){
    $(".border-dots .iteration").css({"animation-duration": "8s"})
})
$(".skater-anim-con").mouseenter(function(){
    $(".border-dots .iteration").css({"animation-duration": "4s"})
})
$(".skater-anim-con").mouseleave(function(){
    $(".border-dots .iteration").css({"animation-duration": "8s"})
})

function scrollToElement(pageElement, val) {    
    var positionX = 0,         
        positionY = 0;    

    while(pageElement != null){        
        positionX += pageElement.offsetLeft;        
        positionY += pageElement.offsetTop;        
        pageElement = pageElement.offsetParent;        
        window.scrollTo(positionX, positionY + val);    
    }
}

var pageElement = document.getElementById("what-is-ametaverse");


$("a.what-is-ametaverse").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("what-is-ametaverse"), 280);
    }, 200);
})
$("a.token-generation-event").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("token-generation-event"), 0);
    }, 200);
})
$("a.ameta-token-sale").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("ameta-token-sale"), 200);
    }, 200);
})
$("a.tokenomics").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("tokenomics"), 200);
    }, 200);
})
$("a.ameta-features").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("ameta-features"), 0);
    }, 200);
})
$("a.play-games").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("play-games"), -50);
    }, 200);
})
$("a.roadmap").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("roadmap"), 0);
    }, 200);
})
$("a.FAQ").click(function(e){
    e.preventDefault();
    setTimeout(() => {
        scrollToElement(document.getElementById("FAQ"), 270);
    }, 200);
})


$("#ameta-pay-amount").keydown(function(event){
    if ( event.keyCode == 46 || event.keyCode == 8 ) {
        $("#ameta-rcv-amount").val($(this).val())
    }
    else{
        if (event.keyCode < 48 || event.keyCode > 57 ) {
            event.preventDefault(); 
        }
        else{
            $(this).bind("keyup paste", function(){                             
                if($(this).val() <30 && $(this).val() != ''){
                    $(".warning-text").css({"opacity":"0"})
                    $(".warning-text._1").css({"opacity":"1"})
                }
                else if($(this).val() > 3000){
                    $(".warning-text").css({"opacity":"0"})
                    $(".warning-text._2").css({"opacity":"1"})
                }
                else{
                    $(".warning-text").css({"opacity":"0"})
                }
                $("#ameta-rcv-amount").val($(this).val())
            })
        }
    }
})
$(window).bind("load",function(){
    $(".disabled").click(function(e){
        e.preventDefault();
    })
    setTimeout(()=>{
        if(document.getElementById("banner-bg-vid")){
            var vid = document.getElementById("banner-bg-vid");
            vid.play();
        }
        $(".btn-slide-prev").click(()=>{
            slider.goToPrevSlide();
            checkNav()
        })
        $(".btn-slide-next").click(()=>{
            slider.goToNextSlide();
            checkNav()
        })
        
        
        // $(".loader .loading-text").css({"animation-name": "bounceOut"})
        // setTimeout(() => {
        //     $(".loader").hide()
        // }, 1000);
    },2000)
})