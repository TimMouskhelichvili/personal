import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AMPAnalyticsScript } from 'src/componentsByPage/document/ampAnalyticsScript';
import { AdditionalScripts } from 'src/componentsByPage/document/additionalScripts';
import { configuration } from 'src/configuration';
import { globalStyles } from 'src/theme/global';
import { getStructuredData } from 'src/utils';

interface IMyDocumentProps {
	styleHTML: string;
	removeScripts: boolean;
}

class MyDocument extends Document<IMyDocumentProps> {

    /**
     * Returns the initial props.
     * @param {DocumentContext} ctx - The context. 
     */
    public static getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const page = ctx.renderPage((App): any => (props: {}): unknown =>
            sheet.collectStyles(<App {...props} />)
        );
		
        const removeScripts = process.env.NODE_ENV !== 'development';

        const styleTag = sheet.getStyleElement();
        // @ts-ignore
        const styleHTML = `${styleTag[0].props.dangerouslySetInnerHTML.__html} ${globalStyles}`;

        return { 
            ...page,
            removeScripts,
            styleHTML
        } as unknown as Promise<DocumentInitialProps>;
    }

    /**
     * The render method.
     */
    public render = (): ReactElement => (
        <Html data-theme={configuration.defaults.themeName} data-primary={configuration.defaults.primary}>
            <Head>
                <AdditionalScripts />
                <style amp-custom={''} dangerouslySetInnerHTML={{ __html: this.props.styleHTML }} />
                <link rel={'shortcut icon'} href={configuration.general.imgs.logo} />
                <link rel={'apple-touch-icon'} href={configuration.general.imgs.logo} />
                <link rel={'manifest'} href={'/manifest.json'} />
                <meta name={'theme-color'} content={'#fafafa'} />
                <meta name={'mobile-web-app-capable'} content={'yes'} />
                <meta name={'apple-touch-fullscreen'} content={'yes'} />
                <meta name={'apple-mobile-web-app-title'} content={configuration.general.company} />
                <meta name={'apple-mobile-web-app-capable'} content={'yes'} />
                <meta name={'apple-mobile-web-app-status-bar-style'} content={'default'} />
                <meta name={'ahrefs-site-verification'} content={'afdd80cb0d012aad985a24b79cdd977ac16b2871756d10d4c0ca207bd0df4b9d'} />
                <script type={'application/ld+json'} dangerouslySetInnerHTML={{ __html: getStructuredData() }} />
                <AMPAnalyticsScript />
            </Head>
            <body>
                <Main />
                {!this.props.removeScripts 
					&& <NextScript />}
            </body>
        </Html>
    );

}

export default MyDocument;