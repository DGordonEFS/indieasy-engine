export default class Subscription {
	_listeners = [];

	subscribe = (listener) => {
		this._listeners.push(listener);
	};

	unsubscribe = (listener) => {
		this._listeners.filter((x) => x != listener);
	};

	unsubscribeAll = () => {
		this._listeners = [];
	};

	getSubscribers = () => {
		return [..._listeners];
	};

	dispatch(event) {
		this._listeners.forEach((listener) => listener(event));
	}
}
