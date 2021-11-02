import { IMenuItem } from 'src/interfaces/IMenuItem';
import { enSitemap } from 'config/sitemap/en';

const enMenuTop: IMenuItem[] = [
    enSitemap.resume,
    enSitemap.portfolio,
    enSitemap.blog
];

const enSideMenu = [ 
    enSitemap.resume,
    enSitemap.portfolio,
    enSitemap.blog
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