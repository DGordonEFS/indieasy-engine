import { System } from '../../common/system';
import reducer from '../store/reducers';
import TutorialManager from './TutorialManager';

import { getStore, onStoreCreated } from 'store';

export const system = new System('tutorialtips', reducer, TutorialManager);
export default system.createManager('_default');

onStoreCreated(() => {
	getStore().subscribe(() => {
		system.getManagers().forEach((manager) => {
			manager.getWatchedTips().forEach((tip) => {
				tip.onStoreChange(getStore().getState());
			});
		});
	});
});
