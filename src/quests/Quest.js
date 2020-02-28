export default class Quest {
	_manager;
	id;
	constructor(manager, id, data) {
		this._manager = manager;
		this.id = id.toUpperCase();

		if (data) Object.assign(this, data);

		if (this.onCreate) this.onCreate(this);
	}

	get complete() {
		return this._manager.getState().complete;
	}
	set complete(value) {
		// do something
	}

	get fail() {
		return this._manager.getState().fail;
	}
	set fail(value) {
		// do something
	}

	onCreate = (quest) => {};
	onTrigger = (quest, state) => {};

	title = (quest) => '';
	description = (quest) => '';
}
