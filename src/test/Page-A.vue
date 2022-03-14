<script setup>
    import { storeTest } from '../store/storeTest.js'
</script>

<template>
    <h1>Page A: {{count}}</h1>
    <button @click="update">update</button>
</template>

<script>
    export default {
        props: {
            msg: String
        },
        mounted() {
        },
        data() {
            return {
                count: storeTest.count
            }
        },
        watch: {
            'storeTest.count': function (newVal, oldVal) {
                console.log('Page A: ', newVal);
                this.count = newVal;
            }
        },
        methods: {
            update: function () {
                const k = new Date().getTime();
                this.count = k;
                storeTest.update(k);
            }
        }
    }
</script>
