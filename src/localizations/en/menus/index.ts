import { IMenuItem } from 'src/interfaces/IMenuItem';
import { enSitemap } from 'config/sitemap/en';

const enMenuTop: IMenuItem[] = [
    enSitemap.resume,
    enSitemap.portfolio
];

const enSideMenu = [ 
    enSitemap.blog,
    enSitemap.resume,
    enSitemap.portfolio
];

const enMenuFooter = [
    enSitemap.blog,
    enSitemap.privacyPolicy,
    enSitemap.termsOfUse,
    enSitemap.sitemap
];

export {
    enMenuFooter,
    enMenuTop,
    enSideMenu
};