import { getStore } from 'store';
import * as actions from './store/actions/actions';

class ToolTipManager {
	get currentToolTip() {
		return this.getState().currentToolTip;
	}

	show = (toolTip) => {
		getStore().dispatch(actions.show(this.id, toolTip));
	};

	hide = () => {
		getStore().dispatch(actions.hide(this.id));
	};
}

export default ToolTipManager;

class ToolTip {
	constructor(x, y, data) {
		this.x = x;
		this.y = y;
		this.data = data;
	}
}

export const createToolTip = (x, y, data) => new ToolTip(x, y, data);
