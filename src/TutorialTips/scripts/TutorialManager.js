import * as actions from '../store/actions/actions';
import { getStore } from '../store/store';

export class TutorialManager {
	id;
	_tips = {};
	_watchedTips;

	constructor(id) {
		this.id = id.toUpperCase();
	}

	addTip = (tip) => {
		this._tips[tip.id] = tip;
		delete this._watchedTips;

		return tip;
	};

	removeTip = (id) => {
		delete this._tips[id.toUpperCase()];
		delete this._watchedTips;
	};

	clear = () => {
		this._tips = {};
		delete this._watchedTips;
	};

	getTip = (id) => {
		return this._tips[id.toUpperCase()];
	};

	getTips = () => {
		return Object.values(this._tips);
	};

	getWatchedTips = () => {
		if (!this._watchedTips) {
			this._watchedTips = Object.values(this._tips).filter(
				(x) => x.onStoreChange
			);
		}
		return [...this._watchedTips];
	};

	addGroup = (group) => {
		group.getTips().forEach((tip) => {
			this.addTip(tip);
		});
	};

	setCurrentTip = (id) => {
		id = id.toUpperCase();
		if (id && !this.getTip(id)) {
			throw `TutorialManager.setCurrentTip -- invalid tip id ${id}`;
		}
		getStore().dispatch(actions.setCurrentTip(id));
	};

	getCurrentTip = () => {
		const currentTipId = getStore().getState().tutorialTips.currentTip;
		if (!currentTipId) return null;

		return this.getTip(currentTipId);
	};

	nextTip = () => {
		const tip = this.getCurrentTip();

		if (!tip) return;

		let id;

		switch (typeof tip.next) {
			case 'string':
				id = tip.next;
				break;
			case 'function':
				id = tip.next();
				break;
			default:
				return;
		}

		this.setCurrentTip(id);
	};

	prevTip = () => {
		const tip = this.getCurrentTip();

		if (!tip) return;

		let id;

		switch (typeof tip.prev) {
			case 'string':
				id = tip.prev;
				break;
			case 'function':
				id = tip.prev();
				break;
			default:
				return;
		}

		this.setCurrentTip(id);
	};

	closeTip = () => {
		this.setCurrentTip(null);
	};
}

const managers = {};
let activeManagerId = '';
managers[activeManagerId] = new TutorialManager('');

export const createManager = (id) => {
	const manager = new TutorialManager(id);
	managers[id.toUpperCase()] = manager;
	return manager;
};

export const getManager = (id) => {
	return managers[id.toUpperCase()];
};

export const setActiveManager = (id) => {
	activeManagerId = id.toUpperCase();
};

export const getActiveManager = () => {
	return managers[activeManagerId];
};

let init = false;
export default () => {
	if (!init) {
		init = true;
		getStore().subscribe(() => {
			const state = getStore().getState();
			const activeManager = getActiveManager();

			activeManager.getWatchedTips().forEach((tip) => {
				if (tip.watchStore) tip.onStoreChange(state);
			});
		});
	}

	return managers[''];
};
