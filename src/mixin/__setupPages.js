import { GlobalMethods } from './GlobalMethods.js';

export const __setupPages = {
    created: function (v) {
        //console.log('__setupPages: created ...');
        GlobalMethods.methods.__created(v, GlobalMethods.methods);
    },
    mounted: function (v) {
        GlobalMethods.methods.__mounted(v);
    },
    destroyed: function (v) {
    }
}