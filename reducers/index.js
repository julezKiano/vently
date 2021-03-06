import { combineReducers } from 'redux';
import auth from './init_reducer';
import login from './login_reducer';
import events from './events_reducer';
import singleEvent from './single_event_reducer';
import tickets from './tickets_reducer';
import singleTicket from './single_ticket_reducer';
import pay from './pay_reducer';
import profile from './profile_reducer';
import map from './map_reducer';
import interests from './interests_reducer';


export default combineReducers({
    auth,
    login,
    events,
    singleEvent,
    tickets,
    singleTicket,
    pay,
    profile,
    map,
    interests
});
