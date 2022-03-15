import { _ as _export_sfc, a as __vitePreload } from "./index.ebcba6c2.js";
import { B as Button } from "./button.48c839d8.js";
import { m as defineAsyncComponent, r as reactive, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, d as createVNode, w as withCtx, F as Fragment, p as pushScopeId, h as popScopeId, g as createTextVNode } from "./vendor.240e5822.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = { msg: "hi" };
const msg = "[success] from conventional virtual file";
var Home2_vue_vue_type_style_index_0_scoped_true_lang = "";
function __variableDynamicImportRuntime1__(path) {
  switch (path) {
    case "../components/ImportType.vue":
      return __vitePreload(() => import("./ImportType.e2f6aa34.js"), true ? ["assets/ImportType.e2f6aa34.js","assets/vendor.240e5822.js"] : void 0);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-8abb0530"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Home", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1));
const _hoisted_3 = { class: "virtual" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "inter" }, "this will be styled with a font-face", -1));
const _hoisted_5 = { class: "import-meta-url" };
const _hoisted_6 = { class: "protocol" };
const _hoisted_7 = { class: "nested-virtual" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("CommonButton");
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode(" encrypted message: "),
  /* @__PURE__ */ createBaseVNode("p", { class: "encrypted-msg" })
], -1));
const _sfc_main = {
  setup(__props) {
    const ImportType = load("ImportType");
    const Foo = defineAsyncComponent(() => __vitePreload(() => import("./Foo.678c6066.js"), true ? ["assets/Foo.678c6066.js","assets/Foo.a8752494.css","assets/vendor.240e5822.js"] : void 0).then((mod) => mod.Foo));
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntime1__(`../components/${file}.vue`));
    }
    const url = document.querySelector(".import-meta-url").textContent;
    const protocol = new URL(url).protocol;
    const state = reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => unref(state).count++)
        }, "count is: " + toDisplayString(unref(state).count), 1),
        createVNode(unref(Foo)),
        createBaseVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1),
        _hoisted_4,
        createBaseVNode("p", _hoisted_5, toDisplayString(unref(state).url), 1),
        createBaseVNode("p", _hoisted_6, toDisplayString(unref(state).protocol), 1),
        createBaseVNode("p", _hoisted_7, "msg from nested virtual module: " + toDisplayString(unref(msg)), 1),
        createVNode(unref(Button), null, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        _hoisted_9,
        createVNode(unref(ImportType))
      ], 64);
    };
  }
};
var Home2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8abb0530"]]);
export { Home2 as default };
