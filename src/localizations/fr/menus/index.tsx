import { IMenuItem } from 'src/interfaces/IMenuItem';
import { frSitemap } from 'config/sitemap/fr';

const frMenuTop: IMenuItem[] = [];

const frSideMenu = [ 
    frSitemap.blog
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