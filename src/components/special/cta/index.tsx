import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from './style';
import { Button } from 'src/components/elements/button';
import { useLocale } from 'src/localizations';

interface ICTAProps {
	className?: string;
	withIcon?: boolean;
}

/**
 * The CTA component.
 * @param {ICTAProps} props - The props.
 */
const CTA = (props: ICTAProps): ReactElement => {
    const locale = useLocale();
	
    return (
        <Button
            href={locale.global.consultation}
            target={'_blank'}
            className={props.className}
            title={locale.global.bookConsultation}
            rel={'noreferrer'}>
            <span>{locale.global.bookConsultation}</span>
            {props.withIcon && 
				<StyledIcon icon={faArrowRight} />}
        </Button>
    );
};

export {
    CTA
};