import themes from 'theming';
import { createStore } from 'store';

createStore();

const theme = themes.createTheme('test');

describe('Theming ThemeManager', () => {
	test('createTheme', () => {
		expect(theme).not.toBeNull();
		expect(theme.id).toBe('TEST');
	});

	test('getTheme', () => {
		expect(themes.manager.getTheme('test')).toBe(theme);
	});

	test('setActiveTheme and getActiveTheme', () => {
		themes.manager.setActiveTheme('test');
		expect(themes.manager.getActiveTheme()).toBe(theme);
		themes.manager.setActiveTheme('testa');
		const themeA = themes.manager.getTheme('testa');
		expect(themes.manager.getActiveTheme()).toBe(themeA);
	});
});
