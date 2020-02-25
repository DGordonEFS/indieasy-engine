import { getStore } from 'store';
import * as actions from '../store/actions/actions';

export default class TutorialTip {
	_id;
	get id() {
		return this._id;
	}
	set id(value) {
		this._id = value.toUpperCase();
	}
	title;
	text;
	next;
	prev;
	onStoreChange;
	get watchStore() {
		return getStore().getState().tutorialtips.watchTips[this.id];
	}
	set watchStore(value) {
		if (!value) getStore().dispatch(actions.unwatchTip(this.id));
		else getStore().dispatch(actions.watchTip(this.id));
	}

	constructor(id, title, text, data) {
		//} next, prev, onStoreChange, watchStore) {
		this.id = id;
		this.title = title;
		this.text = text;

		if (data) Object.assign(this, data);
		/*
		this.next = next;
		this.prev = prev;
		this.onStoreChange = onStoreChange;
		this.watchStore = watchStore;
		*/
	}
}
