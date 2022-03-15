<script setup>
    import { __setupPages } from '../mixin/__setupPages.js'
    import { storeTest } from '../store/storeTest.js'

    import PageA from './Page-A.vue'
    import PageB from './Page-B.vue'
    import Store from './Store.vue'
</script>

<template>
    <h1>Home: count = {{ count }}</h1>
    <button @click="updateCount">Update Count</button>
    <button @click="send_eventBus">Send Event</button>
    <hr />
    <PageA></PageA>
    <hr />
    <PageB></PageB>
    <hr />
    <Store></Store>
</template>

<script>
    export default {
        destroyed: function () { __setupPages.destroyed(this); },
        created: function () { __setupPages.created(this); },
        mounted: function () {
            __setupPages.mounted(this);
        },
        //--------------------------------------------------------
        data() {
            return {
                count: storeTest.count
            }
        },
        methods: {
            '*': function (m) {
                console.log('Home.Vue: [*] = ', m.data);
            },
            'storeTest.count': function (m) {
                console.log('Home.Vue: storeTest.count = ', m);
                this.count = m.data;
            },
            send_eventBus: function () {
                this.__sendMessage({
                    send_id: this.__id,
                    callback: '*',
                    data: new Date().getTime()
                });
            },
            updateCount: function () {
                const k = new Date().getTime();
                this.count = k;
                storeTest.updateCount({
                    send_id: this.__id,
                    callback: 'storeTest.count',
                    type: '',
                    data: k
                });
            }
        }
    }
</script>
