import { getStore } from 'store';
import { actions } from './store/actions';

export default class DialogManager {
	_dialogs = {};

	addDialog = (dialog) => {
		this._dialogs[dialog.id] = dialog;
	};

	getDialog = (id) => {
		return this._dialogs[id.toUpperCase()];
	};

	getDialogs = () => {
		return Object.values(this._dialogs);
	};

	getDialogIds = () => {
		return Object.keys(this._dialogs);
	};

	setCurrentDialog = (dialog) => {
		store.dispatch(actions.setDialog(this.id, dialog));
	};

	getCurrentDialog = () => {
		return this.getState().currentDialog;
	};
}
