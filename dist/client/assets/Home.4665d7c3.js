import { G as GlobalMethods, s as storeTest } from "./index.ebcba6c2.js";
import _sfc_main$1 from "./Page-A.60569d65.js";
import _sfc_main$2 from "./Page-B.1865641d.js";
import Store from "./Store.0423ee79.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createVNode, F as Fragment } from "./vendor.240e5822.js";
import "./__setupComs.79e8d5b0.js";
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
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, "Home: count = " + toDisplayString(_ctx.count), 1),
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.updateCount && _ctx.updateCount(...args))
        }, "Update Count"),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.send_eventBus && _ctx.send_eventBus(...args))
        }, "Send Event"),
        _hoisted_1,
        createVNode(_sfc_main$1),
        _hoisted_2,
        createVNode(_sfc_main$2),
        _hoisted_3,
        createVNode(Store)
      ], 64);
    };
  }
});
export { _sfc_main as default };
