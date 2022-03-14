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

        <h1>App Main: {{count}}</h1>
        <button @click="update">update</button>

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
        watch: {
            'storeTest.count': function (newVal, oldVal) {
                console.log('App Main: ', newVal);
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
