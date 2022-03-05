(() => {
	// set up the puzzle pieces and boards
	let
		theButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		dropZones = document.querySelectorAll(".drop-zone"),
		theGameBoard = document.querySelector(".puzzle-board");

		const piecePaths = ["topLeft", "topright", "bottomLeft", "bottomRight"];

	/* the Thumbnails collects all of the image elements into an array like container that looks like this:
	[
		<img src= "images/buttonZero.jpg" alt="thumbnail">
		<img src= "images/buttonOne.jpg" alt="thumbnail">
		<img src= "images/buttonTwo.jpg" alt="thumbnail">
		<img src= "images/buttonThree.jpg" alt="thumbnail">
	]
	*/

	function changeImageSet() {
		// debugger; //pause our code execution at this point
		//let key = this.dataset.bgref;
		//console.log(key);

		//theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`
		theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`

		piecePaths.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`;
		})

		// `` => this is a javascript template string You can use it to write a bit of
		// inline javascript which will be interpreted at runtime
		// search for MDN JavaScript Template String
	}

	function startDrag(event) {
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function draggedOver(event) {
		event.preventDefault();
	}

	function handleDrop(event) {
		event.preventDefault();
		let currentEl = event.dataTransfer.getData("draggedElement");

		console.log("dropped this element:", currentEl);

		this.appendChild(document.querySelector(`#${currentEl}`))
	}

	//these are the "triggers" we want the user to use to fire off events
	theButtons.forEach(item => item.addEventListener("click", changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});
})();
