import { IMenuItem } from 'src/interfaces/IMenuItem';
import { enSitemap } from 'config/sitemap/en';

const enMenuTop: IMenuItem[] = [ 

];

const enMenuFooter = [
    enSitemap.privacyPolicy,
    enSitemap.termsOfUse,
    enSitemap.sitemap
];

export {
    enMenuFooter,
    enMenuTop
};