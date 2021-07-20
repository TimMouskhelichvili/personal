import React, { ReactElement, useEffect, useRef } from 'react';
import { Router } from 'next/dist/client/router';
import { StyledLoadingBar } from './style';

/**
 * The LoadingBar Component.
 */
const LoadingBar = (): ReactElement => {
    const ref = useRef(null);
	
    const handleStart = (): void => {
        resetLoadingBar(ref.current as unknown as HTMLDivElement);
        changeWidthLoadingBar(ref.current as unknown as HTMLDivElement, '50%', '2s');
    };
	
    const handleComplete = (): void => {
        changeWidthLoadingBar(ref.current as unknown as HTMLDivElement, '100%', '.5s');	
    };
	
    useEffect(() => {
        Router.events.on('routeChangeStart', handleStart);
        Router.events.on('routeChangeComplete', handleComplete);
		
        return (): void => {
            Router.events.off('routeChangeStart', handleStart);
            Router.events.off('routeChangeComplete', handleComplete);
        };
    }, []);
	
    return <StyledLoadingBar ref={ref} />;
};

/**
 * Changes the width of the loading bar.
 * @param {HTMLDivElement} loadingBar - The loading bar.
 * @param {string} width - The width property.
 * @param {string} speed - The speed property.
 */
const changeWidthLoadingBar = (loadingBar: HTMLDivElement, width: string, speed: string): void => {
    if (!loadingBar) return;
	
    loadingBar.style.transition = `width ${speed} ease`;
	
    loadingBar.removeEventListener('transitionend', onLoadingBarTransitionEnd);
    loadingBar.addEventListener('transitionend', onLoadingBarTransitionEnd);
	
    setTimeout(() => {
        loadingBar.style.width = width;
    }, 10);
};

/**
 * Changes the width of the loading bar.
 * @param {HTMLDivElement} loadingBar - The loading bar.
 */
const resetLoadingBar = (loadingBar: HTMLDivElement): void => {
    if (!loadingBar) return;
	
    Object.assign(loadingBar.style, {
        'display': 'block',
        'transition': '',
        'width': '0%'
    });

    loadingBar.offsetHeight;
};

/**
 * The transition end loading bar handler.
 * @param {Event} event - The event.
 */
const onLoadingBarTransitionEnd = (event: Event): void => {
    const element = event.target as HTMLElement;
    if (element.style.width !== '100%') return;

    element.style.display = 'none';
};

export {
    LoadingBar
};