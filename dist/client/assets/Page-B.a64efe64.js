import { s as storeTest } from "./index.de0f5bd7.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment } from "./vendor.889ac436.js";
const __default__ = {
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, "Page B: " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.update && _ctx.update(...args))
        }, "update")
      ], 64);
    };
  }
});
export { _sfc_main as default };
