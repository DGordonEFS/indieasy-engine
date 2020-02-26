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
