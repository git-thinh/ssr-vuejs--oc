import { reactive } from 'vue'
export const storeTest = reactive({
    count: 9,
    //------------------------------------
    update(data) {
        this.count = data;
    }
})