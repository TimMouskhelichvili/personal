import React, { ReactElement } from 'react';
import { StyledButton, StyledLink } from './style';

interface IButtonProps {
	title: string
	href?: string;
	target?: '_blank';
	className?: string;
	children?: {};
	rel?: string;
}

/**
 * The button component.
 * @param {IButtonProps} props - The props.
 */
const Button = (props: IButtonProps): ReactElement => {
    if (props.href) {
        return (
            <StyledLink 
                className={props.className}	
                href={props.href} 
                title={props.title}
                rel={props.rel}
                target={props.target}>
                {props.children}
            </StyledLink>
        );
    }

    return (
        <StyledButton title={props.title} className={props.className}>
            {props.children}
        </StyledButton>
    );
};

export {
    Button
};