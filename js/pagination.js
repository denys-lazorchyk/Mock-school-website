export default class Pagination {
	#currentPos;
	#finalNum;
	#divider;
	_news;
	_dividedArr;
	_next;
	_prev;

	constructor(buttonsPagination, arrToPaginate, majorDivider) {
		this.#divider = majorDivider;
		this.#currentPos = 0;
		this._news = [...arrToPaginate];

		this._countNumber();
		this._divideArr();

		[this._prev, this._next] = [...buttonsPagination];
	}

	start() {
		this._renderNews();

		let buttons = [this._prev, this._next];
		buttons.forEach((el) => {
			el.addEventListener("click", () => {
				switch (el.dataset.type) {
					case "1":
						this.#currentPos--;
						this._renderNews();
						break;
					case "2":
						this.#currentPos++;
						this._renderNews();
						break;
					default:
						console.log("You have done something really stupid!!!");
						break;
				}
			});
		});
	}

	_renderNews() {
		this._prev.classList.remove("disabled");
		this._next.classList.remove("disabled");

		if (!this.#currentPos) {
			this._prev.classList.add("disabled");
		}

		if (this.#currentPos === this.#finalNum) {
			this._next.classList.add("disabled");
		}

		this._news.forEach((el) => {
			el.style.display = "none";
		});

		this._dividedArr[this.#currentPos].forEach((el) => {
			el.style.display = "block";
		});
	}

	_divideArr() {
		let divider = this.#divider;
		let news = [...this._news];
		this._dividedArr = []
			.concat(
				[],
				this._news.map(function (elem, i) {
					return i % divider ? [] : [...news.slice(i, i + divider)];
				})
			)
			.filter((el) => {
				return el.length > 0;
			});
	}

	_countNumber() {
		const remainderNum = this._news.length % this.#divider === 0 ? 0 : 1;
		const strictNum = Math.trunc(this._news.length / this.#divider);
		const finalNum = remainderNum + strictNum;

		this.#finalNum = finalNum - 1;
	}
}
