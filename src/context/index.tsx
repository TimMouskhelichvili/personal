import { createStore, Store } from 'redux';
import { IStoreInitialState } from 'src/context/interfaces/IStoreInitialState';
import { IContext } from 'src/context/interfaces/IContext';
import { getRootReducers } from 'src/context/reducers';
import { configuration } from 'src/configuration';

/**
 * If has redux dev tools.
 */
const hasReduxDevTools = (): boolean => {
    return configuration.env.name === 'development'
		&& typeof window !== 'undefined'
	    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function';
};

/**
 * Returns the store.
 * @param {IStoreInitialState} initialState - The initial state.
 */
const getStore = (initialState: IStoreInitialState): Store => {
    const rootReducers = getRootReducers(initialState);
	
    if (!hasReduxDevTools()) {
        return createStore(rootReducers);
    }

    return createStore(
        rootReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__?.()
    );
};

/**
 * The context.
 */
const context: IContext = {};

export {
    context,
    getStore
};