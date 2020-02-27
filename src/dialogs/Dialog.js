class Dialog {
	id;
	_nodes = {};
	constructor(id) {
		this.id = id;
	}

	createNode = (id) => {
		const node = new Node(id);
		this._nodes[node.id] = node;
		return node;
	};

	removeNode = (id) => {
		delete _this._nodes[node.id];
	};

	getNode = (id) => {
		return this._nodes[id.toUpperCase()];
	};

	getNodes = () => {
		return Object.values(this._nodes);
	};

	getNodeIds = () => {
		return Object.keys(this._nodes);
	};
}

class DialogNode {
	id;
	_prompts = [];
	_responses = [];
	constructor(id) {
		this.id = id;
	}

	createPrompt = (data) => {
		const prompt = new DialogPrompt(data);
		this._prompts.push(prompt);
		return prompt;
	};

	getPromptAt = (index) => {
		return this._prompts[index];
	};

	getPrompts = () => {
		return [...this._prompts];
	};

	createResponse = (data) => {
		const response = new DialogResponse(data);
		this._responses.push(response);
		return response;
	};

	getResponseAt = (index) => {
		return this._responses[index];
	};

	getResponses = () => {
		return [...this._responses];
	};
}

class DialogPrompt {
	constructor(data) {
		Object.assign(this, data);
	}
}

class DialogResponse {
	constructor(data) {
		Object.assign(this, data);
	}
}
