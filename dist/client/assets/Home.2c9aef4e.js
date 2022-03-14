import { s as storeTest } from "./index.de0f5bd7.js";
import _sfc_main$1 from "./Page-A.4febb9d2.js";
import _sfc_main$2 from "./Page-B.a64efe64.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createVNode, F as Fragment } from "./vendor.889ac436.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, "Home: " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.update && _ctx.update(...args))
        }, "update"),
        _hoisted_1,
        createVNode(_sfc_main$1),
        _hoisted_2,
        createVNode(_sfc_main$2)
      ], 64);
    };
  }
});
export { _sfc_main as default };
