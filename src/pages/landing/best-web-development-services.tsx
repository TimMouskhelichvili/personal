import { ReactElement } from 'react';
import Home from 'src/pages/index';

export const config = {
    unstable_JsPreload: false,
    unstable_runtimeJS: false
};
  
/**
 * The BestWebDevelopmentServices component.
 */
const BestWebDevelopmentServices = (): ReactElement => {
    return Home();
};

export default BestWebDevelopmentServices;