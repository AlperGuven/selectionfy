import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SingleSelect from "../src/components/SingleSelect.vue";

const clickOutsideStub = {
  beforeMount() {},
  unmounted() {}
};

describe("SingleSelect Component", () => {
  it("emits selected primitive value", async () => {
    const wrapper = mount(SingleSelect, {
      props: { options: ["a", "b", "c"], modelValue: "" },
      global: { directives: { "click-outside": clickOutsideStub } }
    });

    await wrapper.find(".selected-display").trigger("click");
    const options = wrapper.findAll(".single-select-options li");
    expect(options.length).toBe(3);
    await options[1].trigger("click");

    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["b"]);
  });

  it("emits selected object", async () => {
    const options = [
      { label: "One", value: 1 },
      { label: "Two", value: 2 }
    ];
    const wrapper = mount(SingleSelect, {
      props: { options, modelValue: "" },
      global: { directives: { "click-outside": clickOutsideStub } }
    });

    await wrapper.find(".selected-display").trigger("click");
    const items = wrapper.findAll(".single-select-options li");
    expect(items.length).toBe(2);
    await items[1].trigger("click");

    expect(wrapper.emitted()["update:modelValue"][0]).toEqual([options[1]]);
  });
});
