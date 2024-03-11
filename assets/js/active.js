var bX = 0; //bufferX (user scroll input)
var bY = 0; //bufferY (user scroll input)
var cX = 0; //currentX (effective X rotation)
var cY = 0; //currentY (effective Y rotation)

var bBX = 0; // same second rotation properties
var bBY = 0; 
var cBX = 0; 
var cBY = 0; 
var cBZ = 0; // currentZ (effective Z rotation)

var pi = 3.1416

// Fidget animation
function fidget() {
	if (!(bX + bY == 0)) {
		var dX = bX * 0.1; // how much we rotate this frame
		var dY = bY * 0.1; 
    
		cX = (cX + dX) % (2 * pi); // set rotation value
    cY = (cY + dY) % (2 * pi); 
    
		bX -= dX; // update buffer
		bY -= dY;
	}
	$('#one').css('transform', 'rotateX(' + cX + 'rad) rotateY(' + cY + 'rad)');
  window.requestAnimationFrame(fidget);
}

function fidgetB() {
	if (!(bBX + bBY == 0)) {
		var dBX = bBX * 0.1;
		cBX = (cBX + dBX) % (2 * pi);

		var rBY = Math.cos(cBX); //Y ratio
		var rBZ = Math.sin(cBX); //Z ratio

		var dBY = bBY * 0.1; // deltaY 
		var dBZ = bBY * 0.1;
		cBY = (cBY + rBY * dBY) % (2 * pi); // current
		cBZ = (cBZ - rBZ * dBZ) % (2 * pi);

		bBX -= dBX; // buffer
		bBY -= (dBY);
	}
	$('#two').css('transform', 'rotateX(' + cBX + 'rad) rotateY(' + cBY + 'rad) rotateZ(' + cBZ + 'rad)');
  window.requestAnimationFrame(fidgetB);
}

var init = function () {
  
  // Fidget
	requestAnimationFrame(fidget);
  requestAnimationFrame(fidgetB);
  
  // scroll detection script 
!function(window,document){var prefix="",_addEventListener,support;function _addWheelListener(elem,eventName,callback,useCapture){elem[_addEventListener](prefix+eventName,"wheel"==support?callback:function(originalEvent){!originalEvent&&(originalEvent=window.event);var event={originalEvent:originalEvent,target:originalEvent.target||originalEvent.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==originalEvent.type?0:1,deltaX:0,deltaY:0,deltaZ:0,preventDefault:function(){originalEvent.preventDefault?originalEvent.preventDefault():originalEvent.returnValue=!1}};return"mousewheel"==support?(event.deltaY=-.025*originalEvent.wheelDelta,originalEvent.wheelDeltaX&&(event.deltaX=-.025*originalEvent.wheelDeltaX)):event.deltaY=originalEvent.deltaY||originalEvent.detail,callback(event)},useCapture||!1)}window.addEventListener?_addEventListener="addEventListener":(_addEventListener="attachEvent",prefix="on"),support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",window.addWheelListener=function(elem,callback,useCapture){_addWheelListener(elem,support,callback,useCapture),"DOMMouseScroll"==support&&_addWheelListener(elem,"MozMousePixelScroll",callback,useCapture)}}(window,document);

	window.addWheelListener(window, function (e) {
		e.preventDefault();
		bY -= e.deltaX / window.innerWidth;
		bX += e.deltaY / window.innerWidth;
    bBY -= e.deltaX / window.innerWidth;
		bBX += e.deltaY / window.innerWidth;
	});
};

jQuery(document).ready(function ($) {
	init();
});