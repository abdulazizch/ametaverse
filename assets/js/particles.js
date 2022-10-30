
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
    console.log("Top position: " + x.top + " Left position: " + x.left);
    $(".ameta-features-side-dots").css({"top": (x.top/2 - elem.height()/2), "left": (x.left-177)})
  });

// const example = document.getElementById('dot-interact');

// example.onmouseenter = function(e) { 
//     const x = e.pageX - e.currentTarget.offsetLeft; 
//     const y = e.pageY - e.currentTarget.offsetTop; 
//     console.log("x: "+x+", y: "+y)
// }
// $(document).bind("mousemove",function(){
//     var elem = $(".dot-interact").position();
//     const x = e.pageX - e.currentTarget.offsetLeft; 
//     const y = e.pageY - e.currentTarget.offsetTop; 
//     console.log("Top position: " + x.top + " Left position: " + x.left);

// });
