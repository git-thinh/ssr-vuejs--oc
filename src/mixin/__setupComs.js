import { GlobalMethods } from './GlobalMethods.js';

export const __setupComs = {
    created: function (v) {
        GlobalMethods.methods.__created(v, GlobalMethods.methods);
    },
    mounted: function (v) {
        GlobalMethods.methods.__mounted(v);
    },
    destroyed: function (v) {
    }
}