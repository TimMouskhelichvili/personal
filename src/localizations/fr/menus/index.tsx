import { IMenuItem } from 'src/interfaces/IMenuItem';
import { frSitemap } from 'config/sitemap/fr';

const frMenuTop: IMenuItem[] = [
    frSitemap.resume,
    frSitemap.portfolio
];

const frSideMenu = [ 
    frSitemap.blog,
    frSitemap.resume,
    frSitemap.portfolio
];

const frMenuFooter = [
    frSitemap.blog,
    frSitemap.privacyPolicy,
    frSitemap.termsOfUse,
    frSitemap.sitemap
];

export {
    frMenuFooter,
    frMenuTop,
    frSideMenu
};