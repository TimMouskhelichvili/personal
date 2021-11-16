import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import Script from 'next/script';
import { configuration } from 'src/configuration';

interface IYoutubeProps {
	videoId: string;
}

/**
 * The Youtube component.
 * @param {IYoutubeProps} props - The props.
 */
const Youtube = (props: IYoutubeProps): ReactElement => {
    const isAmp = useAmp();

    if (isAmp) {
        return (
            <>
                <Script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />
                <amp-youtube
                    data-videoid={props.videoId}
                    layout="responsive"
                    width="480"
                    height="270"
                />
            </>
        );
    }

    return <iframe src={`${configuration.general.youtube.embed}${props.videoId}`} allowFullScreen loading="lazy" />;
};

export {
    Youtube
};