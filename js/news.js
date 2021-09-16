import Pagination from "./pagination.js";

const showMoreBtns = document.querySelectorAll(".show-more");
const newsItems = document.querySelectorAll(".news-container");
const newsContainer = document.querySelector(".news");

const showNext = document.querySelector(".show-next");
const showPrev = document.querySelector(".show-prev");
const buttonsPagination = [showPrev, showNext];

const hideAllNews = function () {
	newsItems.forEach((it) => {
		it.style.height = "350px";
		it.querySelector(".show-more").innerText = "↓ show-more ↓";
	});
};

showMoreBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const closentNews = btn.closest(".news-container");
		const insideHeight = closentNews.scrollHeight + 10;
		const outsideHeight = closentNews.clientHeight;

		hideAllNews();

		if (insideHeight - outsideHeight < 15) {
			closentNews.style.height = `${350}px`;
			e.target.innerText = "↓ show-more ↓";
		} else {
			closentNews.style.height = `${insideHeight}px`;
			e.target.innerText = "↑ show-less  ↑";
		}
	});
});

buttonsPagination.forEach((btn) => {
	btn.addEventListener("click", hideAllNews);
});

const pagination = new Pagination(buttonsPagination, newsItems, 4);
pagination.start();
