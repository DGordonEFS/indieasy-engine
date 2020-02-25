import { getStore } from '../store';
import { actions } from './store/actions';

class Theme {
	id;
	_css = {};
	_data = {};
	constructor(id) {
		this.id = id.toUpperCase();
	}

	addCss = (id, css) => {
		this._css[id.toUpperCase()] = css;
	};

	getCss = (id) => {
		return this._css[id.toUpperCase()];
	};

	addData = (id, data) => {
		this._data[id.toUpperCase()] = data;
	};

	getData = (id) => {
		return this._data[id.toUpperCase()];
	};
}

class ThemeManager {
	_themes = {};
	_selectedThemeId;

	createTheme = (id) => {
		const theme = new Theme(id);
		this._themes[theme.id] = theme;
		return theme;
	};

	getTheme = (id) => {
		return this._themes[id.toUpperCase()];
	};

	setActiveTheme = (id) => {
		getStore().dispatch(actions.setTheme(id));
	};

	getActiveTheme = () => {
		return this.getTheme(getStore().getState().theming.currentTheme);
	};
}

const instance = new ThemeManager();
export default instance;

export const createTheme = instance.createTheme;
