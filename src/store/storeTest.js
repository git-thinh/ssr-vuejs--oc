import { reactive } from 'vue'
import { __config } from '../__config.js';
import { __callback } from '../mixin/__callback.js';

export const storeTest = reactive({
    //------------------------------------
    count: 9,
    //------------------------------------
    updateCount(m) {
        if (m != null) {
            this.count = m.data;
            __callback.callNotIds(m);
        }
    }
})