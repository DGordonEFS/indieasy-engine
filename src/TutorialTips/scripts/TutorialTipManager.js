import actions from '../store/actions/actions';
import getStore from '../store/store';

export class TutorialTipManager {
	_tips = {};
	_watchedTips = [];

	addTip = (tip) => {
		this._tips[tip.id.toUpperCase()] = tip;
		this._watchedTips = this._tips.filter((x) => x.onStoreChanged);
	};

	removeTip = (id) => {
		delete this._tips[id.toUpperCase()];
		this._watchedTips = this._tips.filter((x) => x.onStoreChanged);
	};

	getTip = (id) => {
		return this._tips[id.toUpperCase()];
	};

	getWatchedTips = () => {
		return [...this._watchedTips];
	};

	addGroup = (group) => {
		group.getTips.forEach((tip) => {
			this.addTip(tip);
		});
	};

	getCurrentTip = () => {
		if (!getStore().currentTipId) return null;

		return this._tips[store.currentTipId];
	};

	setCurrentTip = (id) => {
		getStore().dispatch(actions.setCurrentTip(id));
	};

	nextTip = () => {
		const tip = this.getCurrentTip();

		if (!tip) return;

		let id;

		switch (typeof tip.next) {
			case String:
				id = tip.next;
				break;
			case Function:
				id = tip.next();
				break;
			default:
				break;
		}

		this.setCurrentTip(id);
	};

	prevTip = () => {
		const tip = this.getCurrentTip();

		if (!tip) return;

		let id;

		switch (typeof tip.prev) {
			case String:
				id = tip.prev;
				break;
			case Function:
				id = tip.prev();
				break;
			default:
				break;
		}

		this.setCurrentTip(id);
	};

	closeTip = () => {
		this.setCurrentTip(null);
	};
}

export const instance = new TutorialTipManager();

getStore().subscribe(() => {
	const state = getStore().getState();
	instance.getWatchedTips().forEach((tip) => {
		tip.onStoreChanged(state);
	});
});
