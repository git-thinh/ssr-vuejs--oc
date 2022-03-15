import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'

// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./test/*.vue')

const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\.\/test(.*)\.vue$/)[1].toLowerCase()
    const key = name === '/home' ? '/' : name;
    const c = pages[path] // () => import('./pages/*.vue')
    //console.log(key, c);
    return { path: key, component: c }
})

export function createRouter() {
    return _createRouter({
        // use appropriate history implementation for server/client import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    });
}
