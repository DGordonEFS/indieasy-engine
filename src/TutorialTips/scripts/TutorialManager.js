import * as actions from '../store/actions/actions';
import { getStore } from 'store';

export default class TutorialManager {
	_tips = {};
	_watchedTips = {};

	addTip = (tip) => {
		this._tips[tip.id] = tip;

		return tip;
	};

	removeTip = (id) => {
		delete this._tips[id.toUpperCase()];
	};

	clear = () => {
		this._tips = {};
	};

	getTip = (id) => {
		return this._tips[id.toUpperCase()];
	};

	getTips = () => {
		return Object.values(this._tips);
	};

	watch = (tip) => {
		this._watchedTips[tip.id] = tip;
	};

	unwatch = (tip) => {
		delete this._watchedTips[tip.id];
	};

	unwatchAll = () => {
		this.getWatchedTips().forEach((tip) => this.unwatch(tip));
	};

	getWatchedTips = () => {
		return Object.values(this._watchedTips);
	};

	addGroup = (group) => {
		group.getTips().forEach((tip) => {
			this.addTip(tip);
		});
	};

	setCurrentTip = (id) => {
		if (id) {
			id = id.toUpperCase();
			if (!this.getTip(id)) {
				throw `TutorialManager.setCurrentTip -- invalid tip id ${id}`;
			}
		}
		getStore().dispatch(actions.setCurrentTip(this.id, id));
	};

	getCurrentTip = () => {
		const currentTipId = this.getState().currentTip;
		if (!currentTipId) return null;

		return this.getTip(currentTipId);
	};

	nextTip = () => {
		const tip = this.getCurrentTip();

		if (!tip) return;

		const id = tip.next.toString() === tip.next ? tip.next : tip.next();

		this.setCurrentTip(id);
	};

	prevTip = () => {
		const tip = this.getCurrentTip();

		if (!tip) return;

		const id = tip.prev.toString() === tip.prev ? tip.prev : tip.prev();

		this.setCurrentTip(id);
	};

	closeTip = () => {
		this.setCurrentTip(null);
	};
}
