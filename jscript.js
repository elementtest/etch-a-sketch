//return root css variable from the jstyle.css sheet returns the --grid value value from the :root part of it
let cssGridValue = window.getComputedStyle(document.documentElement).getPropertyValue('--grid-value');
//link number button in html to javascript by finding the unique id and using query selector
let numberButton = document.querySelector('#numberButton');
//add event listener to the number button will then use it to style the grid based on the user input
numberButton.addEventListener('click', function(DtripD) {
	let userInput = prompt('give me a number');
	let cssGridValue = userInput;

	console.log(cssGridValue);
for(x=0; x<userInput*userInput; x++) {
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

})