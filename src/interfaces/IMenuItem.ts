import { IMenuLinkItem } from 'src/interfaces/IMenuLinkItem';

interface IMenuItem {
	title: string;
	href?: string;
	subItems?: IMenuLinkItem[];
}

export type {
    IMenuItem
};