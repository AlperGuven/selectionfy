import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Variant from "../src/components/variants/SingleSelectSimple.vue";

const clickOutsideStub = {
  beforeMount() {},
  unmounted() {}
};

describe("SingleSelect simple variant", () => {
  it("renders two SingleSelects with initial labels", () => {
    const wrapper = mount(Variant, {
      global: { directives: { "click-outside": clickOutsideStub } }
    });
    const displays = wrapper.findAll(".selected-display");
    expect(displays.length).toBe(2);
    expect(displays[0].text()).toContain("Apple");
    expect(displays[1].text()).toContain("One");
  });
});
