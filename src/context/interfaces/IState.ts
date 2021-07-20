import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';
import { IStoreInitialLocaleState } from 'src/context/interfaces/locale/IStoreInitialLocaleState';

interface IState {
	header: IStoreInitialHeaderState;
	locale: IStoreInitialLocaleState;
}

export type {
    IState
};