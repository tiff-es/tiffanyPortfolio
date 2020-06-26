
import { combineReducers } from 'redux'
import manageProjects from './projectsReducer'

const rootReducer = combineReducers({
    projects: manageProjects
});

export default rootReducer;