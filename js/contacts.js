const waysComunication = document.querySelectorAll(".wayOfComunication");
const firstName = document.querySelector(".first_name");
const lastName = document.querySelector(".last_name");
const email = document.querySelector(".email");
const textarea = document.querySelector(".textarea");
const tel = document.querySelector(".telephone");
const labels = document.querySelectorAll("label");

let all = [firstName, lastName, textarea, tel, email];

const submit = document.querySelector(".submit");

waysComunication.forEach((way) => {
	way.addEventListener("mouseenter", () => {
		// console.log(way.dataset);
		way.textContent = way.dataset.showme;
	});

	way.addEventListener("mouseleave", () => {
		way.textContent = way.dataset.old;
	});

	way.addEventListener("click", () => {
		navigator.clipboard.writeText(way.textContent);
		M.toast({ html: "Copied to clipboard!" });
	});
});

submit.addEventListener("click", () => {
	all.forEach((el) => {
		el.value = "";
		el.blur();
		el.classList.remove("valid");
	});

	labels.forEach((el) => {
		el.classList.remove("active");
	});

	M.toast({ html: "Sent!" });
});
