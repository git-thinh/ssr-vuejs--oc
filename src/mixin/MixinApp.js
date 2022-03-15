import { GlobalMethods } from './GlobalMethods.js'
import { __callback } from './__callback.js';

export const MixinApp = {
    mixins: [GlobalMethods],
    created: function () {
        if (__callback.app_id == null) {
            GlobalMethods.methods.__created(this, GlobalMethods.methods);
            __callback.app_id = this.__id;

            //console.log('Mixin App: created ...', this.__id);
        }
    },
    mounted: function (v) {
        if (this.__id) {
            GlobalMethods.methods.__mounted(this);

            //console.log('Mixin App: mounted ...', this.__id);
        }
    },
    destroyed: function () { }
}