import { IMenuItem } from 'src/interfaces/IMenuItem';
import { frSitemap } from 'config/sitemap/fr';

const frMenuTop: IMenuItem[] = [ 

];

const frMenuFooter = [
    frSitemap.privacyPolicy,
    frSitemap.termsOfUse,
    frSitemap.sitemap
];

export {
    frMenuFooter,
    frMenuTop
};