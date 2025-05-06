var details =document.getElementById('details');

var left =document.getElementById('left');
var center =document.getElementById('center');
var right =document.getElementById('right');

var leftButton =document.getElementById('leftButton');
var centerButton =document.getElementById('centerButton');
var rightButton =document.getElementById('rightButton');

function leftClick(){
		details.style.gridTemplateColumns='auto';
		
		left.style.display='grid';
		center.style.display='none';
		right.style.display='none';
		
		left.classList.add("clicked");
		leftButton.innerHTML='close';
		leftButton.onclick=closeDiv;
	
}

function centerClick(){
		details.style.gridTemplateColumns='auto';
		
		left.style.display = 'none';
		center.style.display = 'grid';
		right.style.display = 'none';
		
		center.classList.add("clicked");
		centerButton.innerHTML='close';
		centerButton.onclick=closeDiv;
	
}
function rightClick(){
		details.style.gridTemplateColumns='auto';
		
		left.style.display='none';
		center.style.display='none';
		right.style.display='grid';
		
		right.classList.add("clicked");
		rightButton.innerHTML='close';
		rightButton.onclick=closeDiv;
	
}

function closeDiv(){
		details.style.gridTemplateColumns = "25% auto 25%";
		   
		left.style.display='grid';
    	center.style.display='grid';
		right.style.display='grid';
			
		left.classList.remove("clicked");
        center.classList.remove("clicked");
        right.classList.remove("clicked");	

		leftButton.innerHTML='Read more';
		centerButton.innerHTML='Read more';
		rightButton.innerHTML='Read more';
		
		leftButton.onclick= leftClick;
		centerButton.onclick= centerClick;
		rightButton.onclick= rightClick;
}