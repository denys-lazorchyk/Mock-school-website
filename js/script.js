// import typewriter from "./typewriter.js";
// const title = document.getElementById("title");
// let notes = ["Теребовлянська школа + лiцей"];

let aText = new Array("Coolest school name here");
let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ""; // initialise contents letiable
let iRow; // initialise current row

let typewriter = function () {
	sContents = " ";
	iRow = Math.max(0, iIndex - iScrollAt);
	let destination = document.getElementById("title");

	while (iRow < iIndex) {
		sContents += aText[iRow++] + "<br />";
	}
	destination.innerHTML =
		sContents + aText[iIndex].substring(0, iTextPos) + "&nbsp; &nbsp;";
	if (iTextPos++ == iArrLength) {
		iTextPos = 0;
		iIndex++;
		if (iIndex != aText.length) {
			iArrLength = aText[iIndex].length;
			setTimeout(() => {
				typewriter();
			}, 500);
		}
	} else {
		setTimeout(() => {
			typewriter();
		}, iSpeed);
	}
};

typewriter();
// typewriter(notes, title);
