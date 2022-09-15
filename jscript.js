//SET NUMBER OF SQUARES BUTTON ON TOP OF GRID
var numberButton = document.querySelector('#numberButton');

numberButton.addEventListener('click', function(DtripD){
	let numPrompt = prompt('Please enter in the amount of squares');
});


//for loop:  start at zero and do the following actions 256 times
for(x=0; x<256;x++) {
	//create element on page and store as var divVe
	var divVe = document.createElement('div');
	//append element to .container-grid div in html
	//element not on page until it is appended!
	document.querySelector('.container-grid').appendChild(divVe);
	//add class divGrid to div
	divVe.classList.add('divGrid');
	//give it background color of blue 
	divVe.style.backgroundColor = 'blue';
	//add event listener mouse enters space will turn the background to purple
	divVe.addEventListener("mouseenter", function(DtripD) {
		DtripD.target.style.backgroundColor = "purple";
	});
	//when the mouse leaves the background color will be returned to blue
	divVe.addEventListener("mouseleave", function(DtripD){
		DtripD.target.style.backgroundColor = "blue";
	})
}

//number of squares button 