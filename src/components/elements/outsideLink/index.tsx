import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { isLandingPage } from 'src/utils';

interface IOutsideLinkProps {
	href: string;
	children: {};
	disabled?: boolean;
	title?: string;
	className?: string;
}

/**
 * The OutsideLink component.
 * @param {IOutsideLinkProps} props - The props. 
 */
const OutsideLink = (props: IOutsideLinkProps): ReactElement => {
    const router = useRouter();
    const isLanding = isLandingPage(router);
	
    if (props.disabled || isLanding) return <>{props.children}</>;
	
    return (
        <a href={props.href} target={'_blank'} rel={'noreferrer'} title={props.title} className={props.className}>
            {props.children}
        </a>
    );
};

export {
    OutsideLink
};