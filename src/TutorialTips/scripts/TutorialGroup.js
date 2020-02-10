export default class TutorialGroup {
	id;
	_tips = [];
	constructor(id) {
		this.id = id;
	}

	addTip = (tip) => {
		const lastTip =
			this._tips.length > 0 ? this._tips[this._tips.length] : null;

		if (lastTip) {
			tip.prev = () => lastTip.id;
			lastTip.next = () => tip.id;
		}

		this._tips.push(tip);
	};

	getTips = () => {
		return [...this._tips];
	};
}
