"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var path = require("path");
var vuex = require("vuex");
const storeTest = vue.reactive({
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
const __default__$3 = {
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
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$3, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-2cfddf34><nav data-v-2cfddf34>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
      _push(`</nav><h1 data-v-2cfddf34>App Main: ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button data-v-2cfddf34>update</button><hr data-v-2cfddf34>`);
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-2cfddf34"]]);
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
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path2]
  };
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
const _sfc_main$8 = {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = vue.resolveComponent("Button");
  _push(`<!--[--><h1 data-v-264b4497>${serverRenderer.ssrInterpolate($setup.msg)}</h1><p class="import-meta-url" data-v-264b4497>${serverRenderer.ssrInterpolate($setup.url)}</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_Button, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var About = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-264b4497"]]);
var About$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": About
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>Example external component content</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/example-external-component/ExampleExternalComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var ExampleExternalComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {
  components: {
    ExampleExternalComponent
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExampleExternalComponent = vue.resolveComponent("ExampleExternalComponent");
  _push(serverRenderer.ssrRenderComponent(_component_ExampleExternalComponent, _attrs, null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/External.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var External = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
var External$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": External
}, Symbol.toStringTag, { value: "Module" }));
const __default__$2 = {
  props: {
    msg: String
  },
  mounted() {
  },
  data() {
    return {
      count: storeTest.count
    };
  },
  watch: {
    "storeTest.count": function(newVal, oldVal) {
      console.log("Page A: ", newVal);
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
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Page A: ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button>update</button><!--]-->`);
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
const __default__$1 = {
  data() {
    return {
      count: storeTest.count
    };
  },
  watch: {
    "storeTest.count": function(newVal, oldVal) {
      console.log("Page B: ", newVal);
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
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Page B: ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button>update</button><!--]-->`);
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
const __default__ = {
  data() {
    return {
      count: storeTest.count
    };
  },
  watch: {
    "storeTest.count": function(newVal, oldVal) {
      console.log("Home A: ", newVal);
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
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Home: ${serverRenderer.ssrInterpolate(_ctx.count)}</h1><button>update</button><hr>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<hr>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
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
const _sfc_main$2 = {
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
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Home2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Home2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8abb0530"]]);
var Home2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Home2
}, Symbol.toStringTag, { value: "Module" }));
var Store_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  async setup() {
    const store = vuex.createStore({
      state: {
        foo: "bar"
      }
    });
    return store.state;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(_attrs)} data-v-5da2f7cf>${serverRenderer.ssrInterpolate(_ctx.foo)}</h1>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/test/Store.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Store = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5da2f7cf"]]);
var Store$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Store
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
