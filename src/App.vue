<script setup>
    import { storeTest } from './store/storeTest.js'
</script>

<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/page-a">Page A</router-link>
            <router-link to="/page-b">Page B</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/store">Store</router-link>
            <router-link to="/external">External</router-link>
        </nav>

        <h1>App: count = {{count}}</h1>
        <button @click="updateCount">Update Count</button>
        <button @click="send_eventBus">Send Event</button>

        <hr />

        <router-view v-slot="{ Component }">
            <Suspense>
                <component :is="Component" />
            </Suspense>
        </router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: storeTest.count
            }
        },
        methods: {
            '*': function (m) {
                console.log('App.Vue: [*] = ', m.data);
            },
            'storeTest.count': function (m) {
                console.log('App.Vue: storeTest.count = ', m);
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

<style scoped>
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('./assets/fonts/Inter-Italic.woff2#iefix') format('woff2'), url('./assets/fonts/Inter-Italic.woff') format('woff');
    }

    .inter {
        font-family: 'Inter';
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    nav {
        width: 500px;
        display: flex;
        padding: 20px;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        background: #ff6a00;
        border: 1px solid #ccc;
        margin-top: 20px;
        border-radius: 4px;
    }

        nav a {
            color: white;
            font-weight: bold;
            text-decoration: none;
        }
</style>
