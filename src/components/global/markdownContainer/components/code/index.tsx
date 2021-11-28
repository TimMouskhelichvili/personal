import React, { ReactElement, useState } from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import bash from 'refractor/lang/bash';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { StyledLanguage, StyledPre, StyledButton } from './style';
import { Icon } from 'src/components/elements/icon';

const LANGUAGES: string[] = [ 'javascript', 'bash' ];
let TIMEOUT = 0;

Refractor.registerLanguage(js);
Refractor.registerLanguage(bash);

interface ICodeProps {
	value: string;
	language: string;
}

/**
 * The Code component.
 * @param {ICodeProps} props - The props.
 */
const Code = (props: ICodeProps): ReactElement | null => {
    const [ clicked, setClicked ] = useState(false);
    const [ showIcon, setShowIcon ] = useState(false);
    const isRefractor = LANGUAGES.includes(props.language);

    const handleEnter = (): void => setShowIcon(true);
    const handleLeave = (): void => setShowIcon(false);
    const onClick = (): void => {
        navigator.clipboard.writeText(props.value);
        setShowIcon(false);
        window.clearTimeout(TIMEOUT);
        setClicked(true);
        TIMEOUT = window.setTimeout(() => {
            setClicked(false);
        }, 300);
    };

    return (
        <StyledPre onMouseEnter={handleEnter} onMouseLeave={handleLeave} clicked={clicked}>
            {props.language && <StyledLanguage>{props.language}</StyledLanguage>}
            {isRefractor && <Refractor language={props.language} value={props.value} />}
            {!isRefractor && <code>{props.value}</code>}
            <StyledButton onClick={onClick} showIcon={showIcon}>
                <Icon icon={faCopy} />
            </StyledButton>
        </StyledPre>
    );
};

export {
    Code
};