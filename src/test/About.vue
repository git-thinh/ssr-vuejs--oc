<template>
    <h1>{{ msg }}</h1>
    <p class="import-meta-url">{{ url }}</p>
    <Button>Common Button</Button>
</template>

<script>
    import Button from '../components/button'

    export default {
        async setup() {
            let url = '', u = null;

            if (import.meta.env.SSR) url = import.meta.url;
            else {
                const u = document.querySelector('.import-meta-url');
                if (u) url = u.textContent;
            }

            return {
                msg: 'About',
                url
            }
        },
        components: {
            Button
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
