const typewriter = function (arr, parentEl) {
	console.log(arr.length);
	let iSpeed = 100;
	let iIndex = 0;
	let iArrLength = arr.length;
	let iScrollAt = 20;

	let iTextPos = 0;
	let sContents = "";
	let iRow;

	sContents = " ";
	iRow = Math.max(0, iIndex - iScrollAt);

	while (iRow < iIndex) {
		sContents += arr[iRow++] + "<br />";
	}
	parentEl.innerHTML = sContents + arr[iIndex].substring(0, iTextPos) + "_";
	if (iTextPos++ == iArrLength) {
		iTextPos = 0;
		iIndex++;
		if (iIndex != arr.length) {
			iArrLength = arr[iIndex].length;
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

export default typewriter;
