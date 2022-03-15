import { _ as __setupComs } from "./__setupComs.79e8d5b0.js";
import { _ as _export_sfc, s as storeTest } from "./index.ebcba6c2.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment } from "./vendor.240e5822.js";
var Store_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__ = {
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, "Store: count = " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.updateCount && _ctx.updateCount(...args))
        }, "Update Count"),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.send_eventBus && _ctx.send_eventBus(...args))
        }, "Send Event")
      ], 64);
    };
  }
});
var Store = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84dce038"]]);
export { Store as default };
