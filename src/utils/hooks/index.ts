import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * Returns if page is blog page.
 */
const useIsBlogPage = (): boolean => {
    const router = useRouter();
    const [ isBlogPage, setIsBlogPage ] = useState(router.asPath.startsWith('/blog'));

    useEffect(() => {
        const handleRouteChange = (url: string): void => {
            setIsBlogPage(url.startsWith('/blog'));
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return (): void => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [ router.events ]);

    return isBlogPage;
};

export {
	useIsBlogPage
}