import { addReducer } from '../../store';
import reducer from './reducers';

addReducer('theming', reducer);
