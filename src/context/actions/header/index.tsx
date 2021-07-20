import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { HeaderAction } from 'src/context/enums/header';
import { HeaderType } from 'src/types/headerType';

/**
 * Sets the header.
 * @param {boolean} open - If opened.
 * @param {HeaderType} key - The key.
 */
const setHeader = (open: boolean, key: HeaderType): IActionResponse => ({
    other: key,
    type: HeaderAction.toggleSideMenu,
    value: open
});

export {
    setHeader
};