import fs from 'fs'
import path from 'path'

import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
});

//renderToString(app).then((html) => {
//    console.log(html);
//    fs.writeFileSync('./dist/render.html', html);
//})

(async (app_) => {

    //await r.isReady();
    //app_.mount('#app', true);

    const html = await renderToString(app_);
    console.log(html);
    fs.writeFileSync('./render.html', html);

})(app);