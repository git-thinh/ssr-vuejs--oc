"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var path = require("path");
var _ = require("lodash");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var ___default = /* @__PURE__ */ _interopDefaultLegacy(_);
const __callback = vue.reactive({
  app_id: null,
  items: {},
  paths: {},
  update: function(id, fn) {
    this.items[id] = fn;
  },
  updatePath: function(path2, id) {
    if (!this.paths.hasOwnProperty(path2))
      this.paths[path2] = [id];
    else {
      const a = this.paths[path2], notExist = ___default["default"].findIndex(a, (o) => o === id) === -1;
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
      a = ___default["default"].filter(a, (o) => items.hasOwnProperty(o) && typeof items[o] === "function");
      if (notIDs != null && Array.isArray(notIDs) && notIDs.length > 0)
        a = ___default["default"].filter(a, (o) => ___default["default"].findIndex(notIDs, (j) => j === o) === -1);
      if (this.app_id && ___default["default"].findIndex(a, (o) => o === this.app_id) === -1)
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
const storeTest = vue.reactive({
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
const __default__$4 = {
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
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$4, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-f39e144a><nav data-v-f39e144a>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              vue.createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/page-a" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Page A`);
          } else {
            return [
              vue.createTextVNode("Page A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/page-b" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Page B`);
          } else {
            return [
              vue.createTextVNode("Page B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              vue.createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/store" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Store`);
          } else {
            return [
              vue.createTextVNode("Store")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/external" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`External`);
          } else {
            return [
              vue.createTextVNode("External")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><h1 data-v-f39e144a>App: count = ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button data-v-f39e144a>Update Count</button><button data-v-f39e144a>Send Event</button><hr data-v-f39e144a>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
        default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSuspense(_push2, {
              default: () => {
                serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
              },
              _: 2
            });
          } else {
            return [
              (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f39e144a"]]);
const pages = { "./test/About.vue": () => Promise.resolve().then(function() {
  return About$1;
}), "./test/External.vue": () => Promise.resolve().then(function() {
  return External$1;
}), "./test/Home.vue": () => Promise.resolve().then(function() {
  return Home;
}), "./test/Home2.vue": () => Promise.resolve().then(function() {
  return Home2$1;
}), "./test/Page-A.vue": () => Promise.resolve().then(function() {
  return PageA;
}), "./test/Page-B.vue": () => Promise.resolve().then(function() {
  return PageB;
}), "./test/Store.vue": () => Promise.resolve().then(function() {
  return Store$1;
}) };
const routes = Object.keys(pages).map((path2) => {
  const name = path2.match(/\.\/test(.*)\.vue$/)[1].toLowerCase();
  const key = name === "/home" ? "/" : name;
  const c = pages[path2];
  return { path: key, component: c };
});
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
function createApp() {
  const app = vue.createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router } = createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = path.basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
var button = "";
var Button = vue.defineComponent({
  setup() {
    return () => {
      return vue.createVNode("div", {
        class: "btn"
      }, "Dynamic Button");
    };
  }
});
var About_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  async setup() {
    let url = "";
    url = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("entry-server.js", document.baseURI).href;
    return {
      msg: "About",
      url
    };
  },
  components: {
    Button
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = vue.resolveComponent("Button");
  _push(`<!--[--><h1 data-v-264b4497>${serverRenderer.ssrInterpolate($setup.msg)}</h1><p class="import-meta-url" data-v-264b4497>${serverRenderer.ssrInterpolate($setup.url)}</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_Button, null, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Common Button`);
      } else {
        return [
          vue.createTextVNode("Common Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var About = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-264b4497"]]);
var About$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": About
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExampleExternalComponent = vue.resolveComponent("ExampleExternalComponent");
  _push(serverRenderer.ssrRenderComponent(_component_ExampleExternalComponent, _attrs, null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/External.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var External = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
var External$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": External
}, Symbol.toStringTag, { value: "Module" }));
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
const __setupPages = {
  created: function(v) {
    GlobalMethods.methods.__created(v, GlobalMethods.methods);
  },
  mounted: function(v) {
    GlobalMethods.methods.__mounted(v);
  },
  destroyed: function(v) {
  }
};
const __setupComs = {
  created: function(v) {
    GlobalMethods.methods.__created(v, GlobalMethods.methods);
  },
  mounted: function(v) {
    GlobalMethods.methods.__mounted(v);
  },
  destroyed: function(v) {
  }
};
const __default__$3 = {
  destroyed: function() {
  },
  created: function() {
    __setupComs.created(this);
  },
  mounted: function() {
    __setupComs.mounted(this);
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: storeTest.count
    };
  },
  methods: {
    "*": function(m) {
      console.log("PageA.Vue: [*] = ", m.data);
    },
    "storeTest.count": function(m) {
      console.log("PageA.Vue: storeTest.count = ", m);
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
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$3, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Page A: count = ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button>Update Count</button><button>Send Event</button><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Page-A.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var PageA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const __default__$2 = {
  destroyed: function() {
  },
  created: function() {
    __setupComs.created(this);
  },
  mounted: function() {
    __setupComs.mounted(this);
  },
  data() {
    return {
      count: storeTest.count
    };
  },
  methods: {
    "*": function(m) {
      console.log("PageB.Vue: [*] = ", m.data);
    },
    "storeTest.count": function(m) {
      console.log("PageB.Vue: storeTest.count = ", m);
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
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Page B: count = ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button>Update Count</button><button>Send Event</button><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Page-B.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var PageB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
var Store_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$1 = {
  destroyed: function() {
  },
  created: function() {
    __setupComs.created(this);
  },
  mounted: function() {
    __setupComs.mounted(this);
  },
  data: function() {
    return { count: 555 };
  },
  methods: {
    "*": function(m) {
      console.log("Store.Vue: [*] = ", m.data);
    },
    "storeTest.count": function(m) {
      console.log("Store.Vue: storeTest.count = ", m);
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
        data: k
      });
    }
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-84dce038>Store: count = ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button data-v-84dce038>Update Count</button><button data-v-84dce038>Send Event</button><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Store.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Store = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-84dce038"]]);
var Store$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Store
}, Symbol.toStringTag, { value: "Module" }));
const __default__ = {
  destroyed: function() {
  },
  created: function() {
    __setupPages.created(this);
  },
  mounted: function() {
    __setupPages.mounted(this);
  },
  data() {
    return {
      count: storeTest.count
    };
  },
  methods: {
    "*": function(m) {
      console.log("Home.Vue: [*] = ", m.data);
    },
    "storeTest.count": function(m) {
      console.log("Home.Vue: storeTest.count = ", m);
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
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Home: count = ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button>Update Count</button><button>Send Event</button><hr>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<hr>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<hr>`);
      _push(serverRenderer.ssrRenderComponent(Store, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo$1 = { msg: "hi" };
const msg = "[success] from conventional virtual file";
var Home2_vue_vue_type_style_index_0_scoped_true_lang = "";
function __variableDynamicImportRuntime1__(path2) {
  switch (path2) {
    case "../components/ImportType.vue":
      return Promise.resolve().then(function() {
        return ImportType;
      });
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path2)));
      });
  }
}
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props) {
    const ImportType2 = load("ImportType");
    const Foo2 = vue.defineAsyncComponent(() => Promise.resolve().then(function() {
      return Foo$1;
    }).then((mod) => mod.Foo));
    function load(file) {
      return vue.defineAsyncComponent(() => __variableDynamicImportRuntime1__(`../components/${file}.vue`));
    }
    const url = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("entry-server.js", document.baseURI).href;
    const protocol = new URL(url).protocol;
    const state = vue.reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-8abb0530>Home</h1><p data-v-8abb0530><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo" data-v-8abb0530></p><button data-v-8abb0530>count is: ${serverRenderer.ssrInterpolate(vue.unref(state).count)}</button>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(Foo2), null, null, _parent));
      _push(`<p class="virtual" data-v-8abb0530>msg from virtual module: ${serverRenderer.ssrInterpolate(vue.unref(foo$1).msg)}</p><p class="inter" data-v-8abb0530>this will be styled with a font-face</p><p class="import-meta-url" data-v-8abb0530>${serverRenderer.ssrInterpolate(vue.unref(state).url)}</p><p class="protocol" data-v-8abb0530>${serverRenderer.ssrInterpolate(vue.unref(state).protocol)}</p><p class="nested-virtual" data-v-8abb0530>msg from nested virtual module: ${serverRenderer.ssrInterpolate(vue.unref(msg))}</p>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(Button), null, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CommonButton`);
          } else {
            return [
              vue.createTextVNode("CommonButton")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-8abb0530> encrypted message: <p class="encrypted-msg" data-v-8abb0530></p></div>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(ImportType2), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Home2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Home2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8abb0530"]]);
var Home2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Home2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2>Load Dynamic Component :)</h2><p>import type should be removed without side-effect</p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ImportType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ImportType = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
var foo = "";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = vue.useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const Foo = vue.defineComponent({
  name: "foo",
  setup() {
    return () => vue.createVNode("div", {
      "class": "jsx"
    }, [vue.createTextVNode("from JSX")]);
  }
});
const __moduleId = "src/components/Foo.jsx";
ssrRegisterHelper(Foo, __moduleId);
var Foo$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Foo
}, Symbol.toStringTag, { value: "Module" }));
exports.render = render;
