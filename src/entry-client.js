import { MixinApp } from './mixin/MixinApp.js'

import { createApp } from './main'
const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.mixin(MixinApp);

    app.mount('#__app');

    if (window != null) {
        window.__app = app;
        window.__router = router;
    }
})
