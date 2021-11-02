import { ReactElement } from 'react';
import { Head } from 'next/document';

interface INoPreloadHeadProps {
	removeScripts?: boolean;
}

class NoPreloadHead extends Head {

    /**
	 * Returns the scripts.
     * @param {any} files - The files.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getScripts (files: any): ReactElement[] {
        if ((this.props as INoPreloadHeadProps).removeScripts) {
            return [];
        }

        return super.getScripts(files);
    }

}

export {
    NoPreloadHead
};