import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IState } from 'src/context/interfaces/IState';

interface IMyLinkProps {
	href?: string;
	children: ReactElement | ReactElement[] | string;
	className?: string;
	onClick?: () => void;
	title?: string;
	disabled?: boolean;
}

/**
 * Returns the link.
 * @param {IMyLinkProps} props - The props.
 */
const MyLink = (props: IMyLinkProps): ReactElement => {
    const { language } = useSelector((state: IState) => state.locale);
    const router = useRouter();
	
    let className = props.className || '';
    if (router.pathname === props.href) { 
        className += ' active';
    }
	
    const onClick = (): void => {
        props.onClick?.();
    };
	
    if (props.disabled) return <>{props.children}</>;
	
    if (!props.href) {
        return <a className={className} onClick={onClick} title={props.title}>{props.children}</a>;
    }

    return (
        <Link href={props.href} passHref locale={language}>
            <a className={className} onClick={onClick} title={props.title}>{props.children}</a>
        </Link>
    );
};

export {
    MyLink
};