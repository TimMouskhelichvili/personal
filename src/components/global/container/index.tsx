import React, { ReactElement } from 'react';
import { StyledContainer } from './style';
import { Analytics } from 'src/components/global/container/components/analytics';
import { Chat } from 'src/components/global/container/components/chat';
import { Header } from 'src/components/global/header';
import { Footer } from 'src/components/global/footer';
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
    const externals = getExternals();
	
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