import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseMultiselect from "../src/components/BaseMultiselect.vue";

const clickOutsideStub = {
  beforeMount() {},
  unmounted() {}
};

describe("BaseMultiselect wrapper behavior", () => {
  it("renders placeholder when modelValue is empty", () => {
    const wrapper = mount(BaseMultiselect, {
      props: { options: ["A", "B"], modelValue: null, placeholder: "Select..." },
      global: { directives: { "click-outside": clickOutsideStub } }
    });
    expect(wrapper.find(".selected-display").text()).toContain("Select...");
  });

  it("toggles dropdown visibility on click", async () => {
    const wrapper = mount(BaseMultiselect, {
      props: { options: ["A", "B"], modelValue: null },
      global: { directives: { "click-outside": clickOutsideStub } }
    });
    expect(wrapper.find(".options-dropdown").exists()).toBe(false);
    await wrapper.find(".selected-display").trigger("click");
    expect(wrapper.find(".options-dropdown").exists()).toBe(true);
  });

  it("emits search on input", async () => {
    const wrapper = mount(BaseMultiselect, {
      props: { options: ["A", "B"], modelValue: null },
      global: { directives: { "click-outside": clickOutsideStub } }
    });
    const input = wrapper.find(".search-input");
    await input.setValue("B");
    await input.trigger("input");
    const events = wrapper.emitted("search");
    expect(events).toBeTruthy();
    expect(events[0][0]).toBe("B");
  });
});