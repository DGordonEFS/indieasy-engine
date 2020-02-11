import { getStore } from '../store/store';
import * as actions from '../store/actions/actions';

export default class TutorialTip {
	_id;
	get id() {
		return this._id;
	}
	set id(value) {
		this._id = value.toUpperCase();
	}

	type;
	title;
	text;
	next;
	prev;
	onStoreChange;
	get watchStore() {
		return getStore().getState().tutorialTips.watchTips[this.id];
	}
	set watchStore(value) {
		if (!value) getStore().dispatch(actions.unwatchTip(this.id));
		else getStore().dispatch(actions.watchTip(this.id));
	}

	constructor(id, type, title, text, next, prev, onStoreChange, watchStore) {
		this.id = id;
		this.type = type;
		this.title = title;
		this.text = text;
		this.next = next;
		this.prev = prev;
		this.onStoreChange = onStoreChange;
		this.watchStore = watchStore;
	}
}
