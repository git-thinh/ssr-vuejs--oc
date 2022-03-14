import { r as reactive, a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, t as toDisplayString, e as createBlock, f as resolveDynamicComponent, S as Suspense, g as createTextVNode, p as pushScopeId, h as popScopeId, i as createRouter$1, j as createWebHistory, k as createSSRApp } from "./vendor.889ac436.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const storeTest = reactive({
  count: 9,
  update(data) {
    this.count = data;
  }
});
var App_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-2cfddf34"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Page A");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Page B");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("About");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Store");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("External");
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
const __default__ = {
  data() {
    return {
      count: storeTest.count
    };
  },
  watch: {
    "storeTest.count": function(newVal, oldVal) {
      console.log("App Main: ", newVal);
      this.count = newVal;
    }
  },
  methods: {
    update: function() {
      const k = new Date().getTime();
      this.count = k;
      storeTest.update(k);
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("nav", null, [
          createVNode(_component_router_link, { to: "/" }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/page-a" }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/page-b" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/about" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/store" }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/external" }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        createBaseVNode("h1", null, "App Main: " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.update && _ctx.update(...args))
        }, "update"),
        _hoisted_7,
        createVNode(_component_router_view, null, {
          default: withCtx(({ Component }) => [
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(Component)))
              ]),
              _: 2
            }, 1024))
          ]),
          _: 1
        })
      ]);
    };
  }
});
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cfddf34"]]);
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pages = { "./test/About.vue": () => true ? __vitePreload(() => import("./About.75425213.js"), ["assets/About.75425213.js","assets/About.b3140779.css","assets/button.04fb9cff.js","assets/button.b36c2ed1.css","assets/vendor.889ac436.js"]) : null, "./test/External.vue": () => true ? __vitePreload(() => import("./External.d836e62c.js"), ["assets/External.d836e62c.js","assets/vendor.889ac436.js"]) : null, "./test/Home.vue": () => true ? __vitePreload(() => import("./Home.2c9aef4e.js"), ["assets/Home.2c9aef4e.js","assets/Page-A.4febb9d2.js","assets/vendor.889ac436.js","assets/Page-B.a64efe64.js"]) : null, "./test/Home2.vue": () => true ? __vitePreload(() => import("./Home2.50c4ddcf.js"), ["assets/Home2.50c4ddcf.js","assets/Home2.6fa11460.css","assets/button.04fb9cff.js","assets/button.b36c2ed1.css","assets/vendor.889ac436.js"]) : null, "./test/Page-A.vue": () => true ? __vitePreload(() => import("./Page-A.4febb9d2.js"), ["assets/Page-A.4febb9d2.js","assets/vendor.889ac436.js"]) : null, "./test/Page-B.vue": () => true ? __vitePreload(() => import("./Page-B.a64efe64.js"), ["assets/Page-B.a64efe64.js","assets/vendor.889ac436.js"]) : null, "./test/Store.vue": () => true ? __vitePreload(() => import("./Store.58f81dda.js"), ["assets/Store.58f81dda.js","assets/Store.535ce229.css","assets/vendor.889ac436.js"]) : null };
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/test(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createRouter() {
  return createRouter$1({
    history: createWebHistory(),
    routes
  });
}
function createApp() {
  const app2 = createSSRApp(App);
  const router2 = createRouter();
  app2.use(router2);
  return { app: app2, router: router2 };
}
const { app, router } = createApp();
router.isReady().then(() => {
  app.mount("#app");
});
export { _export_sfc as _, __vitePreload as a, storeTest as s };
