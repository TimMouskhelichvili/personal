import { IStoreInitialHeaderState } from 'src/context/interfaces/header/IStoreInitialHeaderState';

interface IContext {
	header?: IStoreInitialHeaderState | null;
}

export type {
    IContext
};