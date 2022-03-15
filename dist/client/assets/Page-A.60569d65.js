import { _ as __setupComs } from "./__setupComs.79e8d5b0.js";
import { s as storeTest } from "./index.ebcba6c2.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment } from "./vendor.240e5822.js";
const __default__ = {
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, "Page A: count = " + toDisplayString(_ctx.count), 1),
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
export { _sfc_main as default };
