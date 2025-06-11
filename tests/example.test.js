import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseMultiselect from "../src/components/BaseMultiselect.vue";

describe("BaseMultiselect Component", () => {
  it("should render without errors", () => {
    const wrapper = mount(BaseMultiselect);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Base Multiselect Component");
  });
});
