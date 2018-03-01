var svgElement = document.getElementById('theSvg');
var clearButtonElement = document.getElementById('clearSvg');
var growAndContractElement = document.getElementById('growAndContract');
currentInterval = 0;

var isLoaded = function(){
	console.log("loaded");
}




var clearBox = function(mouseData){
	while (svgElement.firstChild != null){
		svgElement.removeChild(svgElement.childNodes[0]);
	}
	clickStorage = {'recentX':-1,'recentY':-1}
	clearInterval(currentInterval);
}

var growAnim = function(buttonPress){

	circleRad = 0;
	growDelta = 5;

	theCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
	theCircle.setAttribute("cx","250");
	theCircle.setAttribute("cy","250");
	theCircle.setAttribute("r",circleRad);
	svgElement.append(theCircle);
	
	
	
	var runGrowthAnim = function(){
		console.log(32);
		circleRad += growDelta;
		if (circleRad >= 250 || circleRad <= 0){
			growDelta *= -1;
		}
		theCircle.setAttribute("r",circleRad);
	}
	
	currentInterval = setInterval(runGrowthAnim,50);
}

var bouncingAnimation = function(buttonPress){
	rectObject={'x':0,'y':0,'width':100,'height':50,'vx':5,'vy':5}
	theRect = document.createElementNS("http://www.w3.org/2000/svg",'rect');
	theRect.setAttribute('x',rectObject['x']);
	theRect.setAttribute('y',rectObject['y']);
	theRect.setAttribute('width',rectObject['width']);
	theRect.setAttribute('height',rectObject['height']);
	svgElement.append(theRect);
	
	
	
	var runRectAnimation = function(){
		rectObject['x'] += rectObject['vx'];
		rectObject['y'] += rectObject['vy'];
		
		theRect.setAttribute('x',rectObject['x']);
		theRect.setAttribute('y',rectObject['y']);
	}
	
	currentInterval = setInterval(runRectAnimation,50);

}





clearButtonElement.addEventListener("click",clearBox);
document.getElementById("stopAnim").addEventListener("click",function(){clearInterval(currentInterval)});
growAndContractElement.addEventListener("click",growAnim);
document.getElementById("bounce").addEventListener("click",bouncingAnimation);
