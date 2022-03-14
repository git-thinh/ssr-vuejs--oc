<template>
    <h1>{{ foo }}</h1>
    <h1>Store Vuex: {{ vx }}</h1>
    <button @click="update_vx">update vuex</button>
</template>

<script>
    //import { createStore } from 'vuex'
    import { storeVuex } from '../store/storeVuex.js'

    export default {
        //async setup() {
        //    const store = createStore({
        //        state: {
        //            foo: 'bar'
        //        }
        //    })
        //    return store.state
        //}
        data: function () {
            return {
                foo: 'bar',
                vx: storeVuex.state.count
            }
        },
        methods: {
            update_vx: function () {
                const k = new Date().getTime();
                storeVuex.dispatch('update', k);
                //this.$store.commit('increment')
                console.log('Store Vuex: ', storeVuex.state.count);
                this.vx = storeVuex.state.count;
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
