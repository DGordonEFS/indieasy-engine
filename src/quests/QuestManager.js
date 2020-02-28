import Quest from './Quest';

export default class QuestManager {
	_quests = {};

	createQuest = (id, data) => {
		const quest = new Quest(this, id, data);
		this._quests[quest.id] = quest;

		// add to store
		return quest;
	};

	getQuest = (id) => {
		return this._quests[id.toUpperCase()];
	};

	getQuests = () => {
		return Object.values(this._quests);
	};

	getQuestIds = () => {
		return Object.keys(this._quests);
	};

	watchQuest = (id) => {};

	watchQuests = (quests) => {};
}
