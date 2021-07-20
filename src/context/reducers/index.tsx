import { combineReducers } from 'redux';
import { IStoreInitialState } from 'src/context/interfaces/IStoreInitialState';
import { getHeaderReducer } from 'src/context/reducers/header';
import { getLocaleReducer } from 'src/context/reducers/locale';

/**
 * Returns the store.
 * @param {IStoreInitialState} initialState - The initial state. 
 */
const getRootReducers = (initialState: IStoreInitialState): never => {
    return combineReducers({
        header: getHeaderReducer,
        locale: getLocaleReducer(initialState.language)
    }) as never;
};

export {
    getRootReducers
};