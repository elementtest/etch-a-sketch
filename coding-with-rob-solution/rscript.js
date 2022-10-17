function populateBoard(size) {
	let board = document.querySelector(".board");
	board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
	board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
	//MISTAKE used single quotes and not backtickes
	//needed backticks
	//MISTAKE repeat cannot have a space have to use repeat and immediately put 
	//template literals are indicated by the backtick character
	//you can use a placeholder with the ${} with a variable name inside
	for (let i = 0; i < 256; i++) {
  		let square = document.createElement("div");
  		square.style.backgroundColor = "blue";
  		board.insertAdjacentElement("beforeend", square);
	};
};

populateBoard(16);