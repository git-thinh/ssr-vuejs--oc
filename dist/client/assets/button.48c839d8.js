import { l as defineComponent, d as createVNode } from "./vendor.240e5822.js";
var button = "";
var Button = defineComponent({
  setup() {
    return () => {
      return createVNode("div", {
        class: "btn"
      }, "Dynamic Button");
    };
  }
});
export { Button as B };
