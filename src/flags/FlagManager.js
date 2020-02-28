import Subscription from '../common/subscription';

class FlagManager {
	_listeners = {};

	subscribe = (key, listener) => {
		if (!this._listeners[key]) this._listeners[key] = new Subscription();
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

export default () => {
	return new Proxy(FlagManager, {
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
};
