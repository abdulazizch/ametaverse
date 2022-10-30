$(function(){
    $("#doughnutChart").drawDoughnutChart([
        { title: "ICO / IDO",  text: "the tokens that <br/>are not sold <br/>will be burnt", value : 20,  color: "#ffff00" },
        { title: "Development", text: "8% unlocked at listing <br/>And <br/>2% monthly thereafter", value:  30, color: "#ff0000" },
        { title: "Exchanges<br/>+ Liquidity",  text: "100% unlocked at listing", value:  8,   color: "#0b3cf4" },
        { title: "Marketing",   text: "5% unlocked at listing<br/>And<br/>2% monthly thereafter", value : 10, color: "#5cf246" },
        { title: "Team", text: "12 months cliff<br/>Then<br/>10% every 6 months", value : 12, color: "#ff7300" },
        { title: "Staking", text: "Available right <br/>after listing", value : 15, color: "#ff83e8" },
        { title: "Activity Rewards", text: "100% unlocked <br/>And<br/>Ready To Use", value : 3,   color: "#46f0f0" },
        { title: "Advisors", text: "6 months cliff<br/>Then<br/>20% every 6 months", value : 2, color: "#8d3ef5" },
    ]);
  });
  /*!
   * jquery.drawDoughnutChart.js
   * Version: 0.4.1(Beta)
   * Inspired by Chart.js(http://www.chartjs.org/)
   *
   * Copyright 2014 hiro
   * https://github.com/githiro/drawDoughnutChart
   * Released under the MIT license.
   * 
   */
  ;(function($, undefined) {
    $.fn.drawDoughnutChart = function(data, options) {
      var $this = this,
        W = $this.width(),
        H = $this.height(),
        centerX = W/2,
        centerY = H/2,
        cos = Math.cos,
        sin = Math.sin,
        PI = Math.PI,
        settings = $.extend({
          segmentShowStroke : false,
          segmentStrokeColor : "#0C1013",
          segmentStrokeWidth : 0,
          baseColor: "rgba(0,0,0,0.5)",
          baseOffset: 4,
          edgeOffset : 10,//offset from edge of $this
          percentageInnerCutout : 75,
          animation : true,
          animationSteps : 90,
          animationEasing : "easeInOutExpo",
          animateRotate : true,
          tipOffsetX: -8,
          tipOffsetY: -45,
          tipClass: "doughnutTip",
          summaryClass: "doughnutSummary",
          summaryTitle: "TOTAL:",
          summaryTitleClass: "doughnutSummaryTitle",
          summaryNumberClass: "doughnutSummaryNumber",
          beforeDraw: function() {  },
          afterDrawed : function() {  },
          onPathEnter : function(e,data) {  },
          onPathLeave : function(e,data) {  }
        }, options),
        animationOptions = {
          linear : function (t) {
            return t;
          },
          easeInOutExpo: function (t) {
            var v = t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
            return (v>1) ? 1 : v;
          }
        },
        requestAnimFrame = function() {
          return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
              window.setTimeout(callback, 1000 / 60);
            };
        }();
  
      settings.beforeDraw.call($this);
  
      var $svg = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($this),
          $paths = [],
          easingFunction = animationOptions[settings.animationEasing],
          doughnutRadius = Min([H / 2,W / 2]) - settings.edgeOffset,
          cutoutRadius = doughnutRadius * (settings.percentageInnerCutout / 100),
          segmentTotal = 0;
  
      //Draw base doughnut
      var baseDoughnutRadius = doughnutRadius + settings.baseOffset,
          baseCutoutRadius = cutoutRadius - settings.baseOffset;
      $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
        .attr({
          "d": getHollowCirclePath(baseDoughnutRadius, baseCutoutRadius),
          "fill": settings.baseColor
        })
        .appendTo($svg);
  
      //Set up pie segments wrapper
      var $pathGroup = $(document.createElementNS('http://www.w3.org/2000/svg', 'g'));
      $pathGroup.attr({opacity: 0}).appendTo($svg);
  

      for (var i = 0, len = data.length; i < len; i++) {
        segmentTotal += data[i].value;
        $paths[i] = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
          .attr({
            "stroke-width": settings.segmentStrokeWidth,
            "stroke": settings.segmentStrokeColor,
            "fill": data[i].color,
            "data-order": i
          })
          .appendTo($pathGroup)
          .on("mouseenter", pathMouseEnter)
          .on("mouseleave", pathMouseLeave)
          .on("mousemove", pathMouseMove);
      }

    //   Mouse on Tokenomics title 
    const tokenomicItems = document.querySelectorAll(".tokenomic-item");
    tokenomicItems.forEach(function(element, index) {
        element.addEventListener('mouseenter', function(e) {
            for(var i = 0, len = data.length; i < len; i++){
                $paths[i].css({
                        "opacity": "0.2",
                    })
            }
            $paths[index].css({
                "opacity": "1",
            })
            $(".chart-inner-text").css({"background":data[index].color+"99"})
            $(".chart-summary-title").html(data[index].title)
            $(".chart-summary-text").html(data[index].text)
        });
        element.addEventListener('mouseleave', function(e) {
            for(var i = 0, len = data.length; i < len; i++){
                $paths[i].css({
                        "opacity": "1"
                    })
            }

            $(".chart-inner-text").css({"background":data[0].color+"99"})
            $(".chart-summary-title").html(data[0].title)
            $(".chart-summary-text").html(data[0].text)
        });
    });
      //Animation start
      animationLoop(drawPieSegments);
  
      //Functions
      function getHollowCirclePath(doughnutRadius, cutoutRadius) {
          //Calculate values for the path.
          //We needn't calculate startRadius, segmentAngle and endRadius, because base doughnut doesn't animate.
          var startRadius = -1.570,// -Math.PI/2
              segmentAngle = 6.2831,// 1 * ((99.9999/100) * (PI*2)),
              endRadius = 4.7131,// startRadius + segmentAngle
              startX = centerX + cos(startRadius) * doughnutRadius,
              startY = centerY + sin(startRadius) * doughnutRadius,
              endX2 = centerX + cos(startRadius) * cutoutRadius,
              endY2 = centerY + sin(startRadius) * cutoutRadius,
              endX = centerX + cos(endRadius) * doughnutRadius,
              endY = centerY + sin(endRadius) * doughnutRadius,
              startX2 = centerX + cos(endRadius) * cutoutRadius,
              startY2 = centerY + sin(endRadius) * cutoutRadius;
          var cmd = [
            'M', startX, startY,
            'A', doughnutRadius, doughnutRadius, 0, 1, 1, endX, endY,//Draw outer circle
            'Z',//Close path
            'M', startX2, startY2,//Move pointer
            'A', cutoutRadius, cutoutRadius, 0, 1, 0, endX2, endY2,//Draw inner circle
            'Z'
          ];
          cmd = cmd.join(' ');
          return cmd;
      };
      function pathMouseEnter(e) {
        var order = $(this).data().order;
        for(var i = 0, len = data.length; i < len; i++){
            $paths[i].css({
                    "opacity": "0.2",
                })
        }
        $paths[order].css({
            "opacity": "1",
        })
        $(".chart-inner-text").css({"background":data[order].color+"99"})
        $(".chart-summary-title").html(data[order].title)
        $(".chart-summary-text").html(data[order].text)
      }
      function pathMouseLeave(e) {
        for(var i = 0, len = data.length; i < len; i++){
            $paths[i].css({
                    "opacity": "1",
                })
        }
        $(".chart-inner-text").css({"background":data[0].color+"99"})
        $(".chart-summary-title").html(data[0].title)
        $(".chart-summary-text").html(data[0].text)
      }
      function pathMouseMove(e) {
        
      }

      function drawPieSegments (animationDecimal) {
        var startRadius = -PI / 2,//-90 degree
            rotateAnimation = 1;
        if (settings.animation && settings.animateRotate) rotateAnimation = animationDecimal;//count up between0~1
  
        // drawDoughnutText(animationDecimal, segmentTotal);
  
        $pathGroup.attr("opacity", animationDecimal);
  
        //If data have only one value, we draw hollow circle(#1).
        if (data.length === 1 && (4.7122 < (rotateAnimation * ((data[0].value / segmentTotal) * (PI * 2)) + startRadius))) {
          $paths[0].attr("d", getHollowCirclePath(doughnutRadius, cutoutRadius));
          return;
        }
        for (var i = 0, len = data.length; i < len; i++) {
          var segmentAngle = rotateAnimation * ((data[i].value / segmentTotal) * (PI * 2)),
              endRadius = startRadius + segmentAngle,
              largeArc = ((endRadius - startRadius) % (PI * 2)) > PI ? 1 : 0,
              startX = centerX + cos(startRadius) * doughnutRadius,
              startY = centerY + sin(startRadius) * doughnutRadius,
              endX2 = centerX + cos(startRadius) * cutoutRadius,
              endY2 = centerY + sin(startRadius) * cutoutRadius,
              endX = centerX + cos(endRadius) * doughnutRadius,
              endY = centerY + sin(endRadius) * doughnutRadius,
              startX2 = centerX + cos(endRadius) * cutoutRadius,
              startY2 = centerY + sin(endRadius) * cutoutRadius;
          var cmd = [
            'M', startX, startY,//Move pointer
            'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY,//Draw outer arc path
            'L', startX2, startY2,//Draw line path(this line connects outer and innner arc paths)
            'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2,//Draw inner arc path
            'Z'//Cloth path
          ];
          $paths[i].attr("d", cmd.join(' '));
          startRadius += segmentAngle;
        }
      }
      function drawDoughnutText(animationDecimal, segmentTotal) {
        $summaryNumber
          .css({opacity: animationDecimal})
          .text((segmentTotal * animationDecimal).toFixed(1));
      }
      function animateFrame(cnt, drawData) {
        var easeAdjustedAnimationPercent =(settings.animation)? CapValue(easingFunction(cnt), null, 0) : 1;
        drawData(easeAdjustedAnimationPercent);
      }
      function animationLoop(drawData) {
        var animFrameAmount = (settings.animation)? 1 / CapValue(settings.animationSteps, Number.MAX_VALUE, 1) : 1,
            cnt =(settings.animation)? 0 : 1;
        requestAnimFrame(function() {
            cnt += animFrameAmount;
            animateFrame(cnt, drawData);
            if (cnt <= 1) {
              requestAnimFrame(arguments.callee);
            } else {
              settings.afterDrawed.call($this);
            }
        });
      }
      function Max(arr) {
        return Math.max.apply(null, arr);
      }
      function Min(arr) {
        return Math.min.apply(null, arr);
      }
      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      function CapValue(valueToCap, maxValue, minValue) {
        if (isNumber(maxValue) && valueToCap > maxValue) return maxValue;
        if (isNumber(minValue) && valueToCap < minValue) return minValue;
        return valueToCap;
      }
      return $this;
    };
  })(jQuery);