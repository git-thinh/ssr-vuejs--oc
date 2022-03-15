import _ from 'lodash';
import { __config } from '../__config.js';
import { __callback } from './__callback.js';

export const GlobalMethods = {
    methods: {
        __created: function (v, methods) {
            const arrCopy = Object.keys(methods);
            arrCopy.forEach(key => {
                if (typeof v[key] === 'undefined')
                    v[key] = methods[key];
            });

            const __id = v.guid();
            v.__id = __id;
            //console.log('__created = ', __id);

            if (typeof v['__onMessage'] === 'function')
                __callback.update(__id, v['__onMessage']);
        },
        __mounted: function (v) {
            //console.log('__mounted = ', v.__id);
            __callback.updatePath(location.pathname, v.__id);
        },
        __onMessage: function (m) {
            const v = this;
            if (m) {
                //console.log('Global: message = ', v, m);
                if (v.__id != m.send_id
                    && m.callback != null && m.callback.length > 0
                    && typeof v[m.callback] === 'function')
                    v[m.callback](m);
            }
        },
        __sendMessage: function (m) {
            __callback.callNotIds(m, [this.__id]);
        },
        //------------------------------------------------------
        guid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
}