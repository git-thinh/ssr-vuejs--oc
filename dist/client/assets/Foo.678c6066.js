import { l as defineComponent, d as createVNode, g as createTextVNode } from "./vendor.240e5822.js";
var foo = "";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export { Foo };
