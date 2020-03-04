import { System } from '../common/system';
import reducer from './store/reducers';
import ToolTipManager from './ToolTipManager';

export const system = new System('tooltips', reducer, ToolTipManager);
export default system.createManager('_default');
