import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledCenter, StyledButton } from './style';
import { Paragraph } from 'src/components/elements/paragraph';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Icon } from 'src/components/elements/icon';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';

/**
 * The SectionTalkExpert component.
 */
const SectionTalkExpert = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <StyledSection>
            <StyledCenter>
                <div>
                    <SubTitle>{locale.pages.home.talkExpert.subTitle}</SubTitle>
                    <Title marginBottom={'20px'}>{locale.pages.home.talkExpert.title}</Title>
                    <Paragraph>{locale.pages.home.talkExpert.description}</Paragraph>
                </div>
                <div>
                    <StyledButton className={configuration.classes.triggerTAWK}>
                        {locale.pages.home.talkExpert.button}
                        <Icon icon={faArrowRight} />
                    </StyledButton>
                </div>
            </StyledCenter>
        </StyledSection>
    );
};

export {
    SectionTalkExpert
};