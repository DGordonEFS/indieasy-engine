export default class TutorialTip {
	id;
	type;
	title;
	text;
	next;
	prev;
	onStoreChanged;
	buttonText;

	constructor(id, type, title, text, next, prev, onStoreChanged, buttonText) {
		this.id = id;
		this.type = type;
		this.title = title;
		this.text = text;
		this.next = next;
		this.prev = prev;
		this.onStoreChanged = onStoreChanged;
		this.buttonText = buttonText;
	}
}
