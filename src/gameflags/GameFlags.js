class GameFlagSubscription {
	_listeners = [];

	subscribe = (listener) => {
		this._listeners.push(listener);
	};

	unsubscribe = (listener) => {
		this._listeners.filter((x) => x != listener);
	};

	dispatch(event) {
		this._listeners.forEach((listener) => listener(event));
	}
}

class GameFlags {
	_listeners = {};

	subscribe = (key, listener) => {
		if (!this._listeners[key])
			this._listeners[key] = new GameFlagSubscription();
		this._listeners[key].subscribe(listener);
	};

	unsubscribe = (key, listener) => {
		if (!this._listeners[key]) return;
		this._listeners[key].unsubscribe(listener);
	};

	dispatch = (key, event) => {
		this._listeners[key].dispatch(event);
	};
}

const instance = new Proxy(new GameFlags(), {
	get: function(target, key) {
		return target[key];
	},
	set: function(target, key, value) {
		if (key === 'subscribe' || key === 'unsubscribe' || key === 'dispatch')
			return false;

		let oldValue = target[key];
		target[key] = value;

		// update store

		target.dispatch(key, { oldValue: oldValue, newValue: value });

		return true;
	},
});

instance.test = 10;
instance.subscribe('test', (event) => console.log(event));

export default instance;
