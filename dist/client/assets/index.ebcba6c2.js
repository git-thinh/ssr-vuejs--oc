import { r as reactive, _, a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, t as toDisplayString, e as createBlock, f as resolveDynamicComponent, S as Suspense, g as createTextVNode, p as pushScopeId, h as popScopeId, i as createRouter$1, j as createWebHistory, k as createSSRApp } from "./vendor.240e5822.js";
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
const __callback = reactive({
  app_id: null,
  items: {},
  paths: {},
  update: function(id, fn) {
    this.items[id] = fn;
  },
  updatePath: function(path, id) {
    if (!this.paths.hasOwnProperty(path))
      this.paths[path] = [id];
    else {
      const a = this.paths[path], notExist = _.findIndex(a, (o) => o === id) === -1;
      if (notExist)
        a.push(id);
    }
  },
  clearAll: function() {
    this.items = {};
  },
  callNotIds: function(m, notIDs) {
    if (m === null || m.callback === null)
      return;
    let a = this.paths[location.pathname] || [];
    if (a.length > 0) {
      const items = this.items;
      a = _.filter(a, (o) => items.hasOwnProperty(o) && typeof items[o] === "function");
      if (notIDs != null && Array.isArray(notIDs) && notIDs.length > 0)
        a = _.filter(a, (o) => _.findIndex(notIDs, (j) => j === o) === -1);
      if (this.app_id && _.findIndex(a, (o) => o === this.app_id) === -1)
        a.push(this.app_id);
      const json = JSON.stringify(m);
      for (let i = 0; i < a.length; i++) {
        const o = JSON.parse(json), id = a[i];
        const fn = items[id];
        if (fn != null)
          setTimeout(function(f) {
            f(o);
          }, 1, fn);
      }
    }
  }
});
const GlobalMethods = {
  methods: {
    __created: function(v, methods) {
      const arrCopy = Object.keys(methods);
      arrCopy.forEach((key) => {
        if (typeof v[key] === "undefined")
          v[key] = methods[key];
      });
      const __id = v.guid();
      v.__id = __id;
      if (typeof v["__onMessage"] === "function")
        __callback.update(__id, v["__onMessage"]);
    },
    __mounted: function(v) {
      __callback.updatePath(location.pathname, v.__id);
    },
    __onMessage: function(m) {
      const v = this;
      if (m) {
        if (v.__id != m.send_id && m.callback != null && m.callback.length > 0 && typeof v[m.callback] === "function")
          v[m.callback](m);
      }
    },
    __sendMessage: function(m) {
      __callback.callNotIds(m, [this.__id]);
    },
    guid: function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
  }
};
const MixinApp = {
  mixins: [GlobalMethods],
  created: function() {
    if (__callback.app_id == null) {
      GlobalMethods.methods.__created(this, GlobalMethods.methods);
      __callback.app_id = this.__id;
    }
  },
  mounted: function(v) {
    if (this.__id) {
      GlobalMethods.methods.__mounted(this);
    }
  },
  destroyed: function() {
  }
};
const storeTest = reactive({
  count: 9,
  updateCount(m) {
    if (m != null) {
      this.count = m.data;
      __callback.callNotIds(m);
    }
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
const _withScopeId = (n) => (pushScopeId("data-v-f39e144a"), n = n(), popScopeId(), n);
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
  methods: {
    "*": function(m) {
      console.log("App.Vue: [*] = ", m.data);
    },
    "storeTest.count": function(m) {
      console.log("App.Vue: storeTest.count = ", m);
      this.count = m.data;
    },
    send_eventBus: function() {
      this.__sendMessage({
        send_id: this.__id,
        callback: "*",
        data: new Date().getTime()
      });
    },
    updateCount: function() {
      const k = new Date().getTime();
      this.count = k;
      storeTest.updateCount({
        send_id: this.__id,
        callback: "storeTest.count",
        type: "",
        data: k
      });
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
        createBaseVNode("h1", null, "App: count = " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.updateCount && _ctx.updateCount(...args))
        }, "Update Count"),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.send_eventBus && _ctx.send_eventBus(...args))
        }, "Send Event"),
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
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f39e144a"]]);
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
const pages = { "./test/About.vue": () => true ? __vitePreload(() => import("./About.be5213c8.js"), ["assets/About.be5213c8.js","assets/About.b3140779.css","assets/button.48c839d8.js","assets/button.b36c2ed1.css","assets/vendor.240e5822.js"]) : null, "./test/External.vue": () => true ? __vitePreload(() => import("./External.45158801.js"), ["assets/External.45158801.js","assets/vendor.240e5822.js"]) : null, "./test/Home.vue": () => true ? __vitePreload(() => import("./Home.4665d7c3.js"), ["assets/Home.4665d7c3.js","assets/Page-A.60569d65.js","assets/__setupComs.79e8d5b0.js","assets/vendor.240e5822.js","assets/Page-B.1865641d.js","assets/Store.0423ee79.js","assets/Store.12f918d9.css"]) : null, "./test/Home2.vue": () => true ? __vitePreload(() => import("./Home2.4896407b.js"), ["assets/Home2.4896407b.js","assets/Home2.6fa11460.css","assets/button.48c839d8.js","assets/button.b36c2ed1.css","assets/vendor.240e5822.js"]) : null, "./test/Page-A.vue": () => true ? __vitePreload(() => import("./Page-A.60569d65.js"), ["assets/Page-A.60569d65.js","assets/__setupComs.79e8d5b0.js","assets/vendor.240e5822.js"]) : null, "./test/Page-B.vue": () => true ? __vitePreload(() => import("./Page-B.1865641d.js"), ["assets/Page-B.1865641d.js","assets/__setupComs.79e8d5b0.js","assets/vendor.240e5822.js"]) : null, "./test/Store.vue": () => true ? __vitePreload(() => import("./Store.0423ee79.js"), ["assets/Store.0423ee79.js","assets/Store.12f918d9.css","assets/__setupComs.79e8d5b0.js","assets/vendor.240e5822.js"]) : null };
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/test(.*)\.vue$/)[1].toLowerCase();
  const key = name === "/home" ? "/" : name;
  const c = pages[path];
  return { path: key, component: c };
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
  app.mixin(MixinApp);
  app.mount("#__app");
  if (window != null) {
    window.__app = app;
    window.__router = router;
  }
});
export { GlobalMethods as G, _export_sfc as _, __vitePreload as a, storeTest as s };
