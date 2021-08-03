import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StyledContainer } from './style';
import { Analytics } from 'src/components/global/container/components/analytics';
import { Chat } from 'src/components/global/container/components/chat';
import { Header } from 'src/components/global/header';
import { Footer } from 'src/components/global/footer';
import { configuration } from 'src/configuration';
import { isProduction } from 'src/utils';

interface IContainerProps {
	children: ReactElement | ReactElement[];
	redirectLanguageToIndex?: boolean;
}

/**
 * The Container component.
 * @param {IContainerProps} props - The props. 
 */
const Container = (props: IContainerProps): ReactElement => {
    const router = useRouter();
    const externals = getExternals();
	
    useEffect(() => {
        const handleRouteChange = (url: string): void => {
            window['gtag']?.('config', configuration.general.google.universal, {
                page_path: url
            });
        };

        router.events.on('routeChangeComplete', handleRouteChange);
	
        return (): void => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
	  }, [ router.events ]);
	  
    return (
        <>	
            {externals}
            <Header />
            <StyledContainer>
                {props.children}
            </StyledContainer>
            <Footer />
        </>
    );
};

/**
 * Returns the externals.
 */
const getExternals = (): ReactElement | null => {
    if (!isProduction()) return null;
	
    return (
        <> 
            <Analytics />
            <Chat />
        </>
    );
};

export {
    Container
};