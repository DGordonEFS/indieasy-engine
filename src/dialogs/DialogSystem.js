import { System } from '../common/system';
import reducer from './store/reducers';
import DialogManager from './DialogManager';

export const system = new System('dialogs', reducer, DialogManager);
export default system.createManager('_default');
