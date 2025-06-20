// Calls an action when clicked outside of an element
export default {
  beforeMount(el, binding, vnode, prevVnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the element and its children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
   
  unmounted(el, binding, vnode, prevVnode) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};
