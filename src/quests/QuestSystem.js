import { System } from '../common/system';
import reducer from './store/reducers';
import QuestManager from './QuestManager';

export const system = new System('quests', reducer, QuestManager);
export default system.createManager('_default');
