const el = document.querySelector("[data-typewriter]");
const words = el.dataset.typewriter.split(",").map((word) => word.trim());

let i = 0, j = 0, isDelete = false;

function type() {
	const current = words[i];
	el.textContent = current.substring(0, j);

	if (!isDelete && j < current.length) {
		j++;
		setTimeout(type, 150);
	} else if (isDelete && j > 0) {
		j--;
		setTimeout(type, 50);
	} else {
		if (i === words.length - 1) return;
		isDelete = !isDelete;
		if (!isDelete) i++;
		setTimeout(type, 750);
	}
}
