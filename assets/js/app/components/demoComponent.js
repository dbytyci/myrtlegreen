'use strict';
import demoHelper from '../helper/demoHelper'

export const demoComponent = {
    init: () => {
        console.log(demoComponent.someFunction())
    },

    someFunction: () => {
        return demoHelper.helperFunction();
    }
};

export default demoComponent;