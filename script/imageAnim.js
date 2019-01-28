(() => {
	// select the elements that u want to work with
	let theButton = document.querySelector("#buttonHolder img");
	//window.addEventListener("load", changeHeaderText);

	// fnctions go in the middle
	function changeHeaderText(){
		document.querySelector("h1").textContent = "Wait for it...";
		document.querySelector("p").textContent = "Aha!";
	}

	//event handing goes at teh bottom
	theButton.addEventListener("click", changeHeaderText);
	// set up the puzzle pieces and boards
	
})();
