for(x=0; x<256;x++) {
	var divVe = document.createElement('div');
	document.querySelector('.container-grid').appendChild(divVe);
	divVe.classList.add('divGrid');
	divVe.style.backgroundColor = 'blue';
	divVe.addEventListener("mouseenter", function(DtripD) {
		DtripD.target.style.backgroundColor = "purple";
	});
	divVe.addEventListener("mouseleave", function(DtripD){
		DtripD.target.style.backgroundColor = "blue";
	})
}
