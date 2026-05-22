(() => {
	const el = document.querySelector("[data-typewriter]");
	if (!el) return;

	const text = el.dataset.typewriter;
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	function start() {
		if (reduceMotion) {
			el.textContent = text;
			el.classList.add("is-done");
			return;
		}

		let i = 0;
		el.textContent = "";
		el.classList.add("is-typing");

		const tick = () => {
			if (i <= text.length) {
				el.textContent = text.substring(0, i++);
				setTimeout(tick, 65);
			} else {
				el.classList.remove("is-typing");
				el.classList.add("is-done");
			}
		};

		setTimeout(tick, 350);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", start);
	} else {
		start();
	}
})();
