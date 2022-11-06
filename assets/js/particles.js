
var mouse = {'x': 0, 'y': 0};

homex = 0;
homey = 0;
forcex = 0;
forcey = 0;
magnet = 200;


$(document).bind('mousemove', function(e) {
    mouse = {'x': e.pageX, 'y': e.pageY};
});


$('.dot-interact').each(function(index, el){
$(el).data( "homex", $(el).position().left);
$(el).data( "homey", $(el).position().top);
});

$('.dot-interact').css('position','absolute');
setInterval(function () {
    $('.dot-interact').each(function(index, el){
        el = $(el);
        position = el.position();
        x0 = el.offset().left;
        y0 = el.offset().top;
        x1 = mouse.x;
        y1 = mouse.y;
        distancex = x1-x0;
        distancey = y1-y0;

        distance = Math.sqrt((distancex * distancex) + (distancey * distancey));


        magnet = 800;
        if(distance>130) {
           magnet=0; 
        }


        powerx = x0 - (distancex / distance) * magnet / distance;
        powery = y0 - (distancey / distance) * magnet / distance;

        forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
        forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;


        el.css('left', powerx + forcex);
        el.css('top',  powery + forcey);
    });
}, 5);

$(document).ready(function(){
    const elem = $(".ameta-features-side-dots-con");
    var x = elem.position();
    // console.log("Top position: " + x.top + " Left position: " + x.left);
    $(".ameta-features-side-dots").css({"top": (x.top/2 - elem.height()/2.8), "left": (x.left + 20)})
    if(window.innerWidth < 1681){
        $(".ameta-features-side-dots").css({"top": (x.top/2 - elem.height()/3), "left": (x.left)})
    }
    if(window.innerWidth < 482){
        $(".ameta-features-side-dots").css({"top": (x.top/2 - elem.height()/1.5), "left": (x.left - 45)})
    }
    if(window.innerWidth < 376 && window.innerHeight < 668){
        $(".ameta-features-side-dots").css({"top": (x.top/2 - elem.height())+30, "left": (x.left - 45)})
    }
  });