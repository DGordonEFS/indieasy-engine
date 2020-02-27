import { combineReducers } from 'redux';

import { addReducer, getStore, onPreStoreCreated } from 'store';

class System {
	_managers = {};
	_stateName;
	_reducer;
	_managerClass;

	constructor(stateName, reducer, managerClass, registerReducer = true) {
		this._stateName = stateName;
		this._reducer = reducer;
		this._managerClass = managerClass;

		if (registerReducer) onPreStoreCreated(this.registerReducer);
	}

	registerReducer = () => {
		addReducer(this._stateName, this.getReducer());
	};

	createManager = (id) => {
		const manager = new this._managerClass();
		manager.id = id.toUpperCase();
		manager.getState = () =>
			getStore().getState()[this._stateName][id.toLowerCase()];
		manager.reducer = this._reducer.bind(null, manager.id);
		this._managers[manager.id] = manager;
		return manager;
	};

	getManager = (id) => {
		return this._managers[id.toUpperCase()];
	};

	getManagers = () => {
		return Object.values(this._managers);
	};

	getManagerIds = () => {
		return Object.keys(this._managers);
	};

	getReducer = () => {
		const reducerData = {};

		Object.values(this._managers).forEach((manager) => {
			reducerData[manager.id.toLowerCase()] = manager.reducer;
		});

		return combineReducers(reducerData);
	};
}
export default System;
