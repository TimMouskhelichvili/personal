import { IMenuItem } from 'src/interfaces/IMenuItem';
import { enSitemap } from 'config/sitemap/en';

const enMenuTop: IMenuItem[] = [];

const enSideMenu = [ 
    enSitemap.blog,
    enSitemap.resume
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