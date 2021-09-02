import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { useSaveStateBeforeLanguageChange } from 'src/components/global/header/utils/hook';
import { hasOnlyOneLanguage, isLandingPage, redirectToLanguage } from 'src/utils';
import { CustomImage } from 'src/components/elements/customImage';
import { setLanguage } from 'src/context/actions/locale';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { MyLink } from 'src/components/elements/link';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';

interface ILogoProps {
	hideLanguage?: boolean;
	isLanding?: boolean;
}

/**
 * The logo component.
 * @param {ILogoProps} props - The props.
 */
const Logo = (props: ILogoProps): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();
    const locale = useLocale();
    const isLanding = isLandingPage(router);
    const { language } = useSelector((state: IState) => state.locale);
    const [ saveState ] = useSaveStateBeforeLanguageChange();
	
    const toggleLanguage = (): void => {
        if (!hasOnlyOneLanguage(router)) {
            saveState();
        }
        const newLanguage = language === 'en' ? 'fr' : 'en' as never; 
        dispatch(setLanguage(newLanguage));
        redirectToLanguage(router, newLanguage);
    };
	
    const close = (): void => {
        dispatch(setHeader(false, 'sideMenu'));
    };
	
    return (
        <StyledLogoContainer hideLanguage={props.hideLanguage}>
            <MyLink href={'/'} onClick={close} title={locale.global.hrefs.logo} disabled={isLanding}>
                <StyledName isLanding={props.isLanding}>
                    <CustomImage 
                        src={configuration.general.imgs.headerLogo}
                        alt={'logo'}
                        height={'40px'} 
                        width={'100px'}
                        layout={'responsive'}
                        heights={'(max-width: 700px) 30px'} />
                </StyledName>
            </MyLink>
            {!props.hideLanguage && <StyledLanguage onClick={toggleLanguage}>
                {getOtherLanguage(language)}
            </StyledLanguage>}
        </StyledLogoContainer>
    );
};

/**
 * Returns the other language.
 * @param {string} language - The language. 
 */
const getOtherLanguage = (language: string): string => {
    return language === 'en' ? 'fr' : 'en';
};

export {
    Logo
};