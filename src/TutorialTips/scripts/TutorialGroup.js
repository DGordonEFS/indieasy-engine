export default class TutorialGroup {
	id;
	wrap;
	_tips = [];
	constructor(id, wrap) {
		this.id = id;
		this.wrap = wrap;
	}

	addTip = (tip) => {
		const lastTip =
			this._tips.length > 0 ? this._tips[this._tips.length - 1] : null;

		if (lastTip) {
			tip.prev = lastTip.id;
			lastTip.next = tip.id;

			if (this.wrap) {
				this._tips[0].prev = tip.id;
				tip.next = this._tips[0].id;
			}
		} else {
			if (this.wrap) {
				tip.next = tip.id;
				tip.prev = tip.id;
			}
		}

		this._tips.push(tip);
	};

	getTips = () => {
		return [...this._tips];
	};
}
