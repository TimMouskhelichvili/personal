import { ReactElement } from 'react';
import Home from 'src/pages/index';

export const config = {
    amp: 'hybrid',
    unstable_JsPreload: false
};
  
/**
 * The BestWebDevelopmentServices component.
 */
const BestWebDevelopmentServices = (): ReactElement => {
    return Home();
};

export default BestWebDevelopmentServices;