import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { HeaderAction } from 'src/context/enums/header';
import { context } from 'src/context';

const initialState: IStoreInitialHeaderState = {
    options: false
};
	
/**
 * Returns the initial state.
 */
const getInitialState = (): IStoreInitialHeaderState => {
    return context.header ? 
        context.header : initialState;
};

/**
 * Returns the theme reducer.
 * @param {IStoreInitialHeaderState} state - The state.
 * @param {IActionResponse} action - The action.
 */
const getHeaderReducer = (state = getInitialState(), action: IActionResponse): unknown => {
    const newState = { ...state };

    if (action.type === HeaderAction.toggleSideMenu) {
        newState[action.other as string] = action.value as boolean;
    }
	
    return newState;
};

export {
    getHeaderReducer
};