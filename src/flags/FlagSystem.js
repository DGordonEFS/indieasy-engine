import { System } from '../common/system';
import reducer from './store/reducers';
import FlagManager from './FlagManager';

export const system = new System('flags', reducer, FlagManager);
export default system.createManager('_default');
