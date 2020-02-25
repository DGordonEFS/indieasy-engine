import toolTips from 'tooltips';
import { createStore } from 'store';

const store = createStore();

const expectedInitialState = {
	currentToolTip: null,
};

const tip = { x: 5, y: 5, data: {} };

describe('ToolTips ToolTips', () => {
	test('show', () => {
		toolTips.manager.show(tip);
		expect(store.getState().tooltips).toEqual({
			...expectedInitialState,
			currentToolTip: tip,
		});
	});
	test('hide', () => {
		toolTips.manager.hide();
		expect(store.getState().tooltips).toEqual(expectedInitialState);
	});

	test('currentToolTip', () => {
		expect(toolTips.manager.currentToolTip).toEqual(null);
		toolTips.manager.show(tip);
		expect(toolTips.manager.currentToolTip).toEqual(tip);
		toolTips.manager.hide();
		expect(toolTips.manager.currentToolTip).toEqual(null);
	});
});
