import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Variant from "../src/components/variants/SingleSelectSimple.vue";

describe("SingleSelect simple variant", () => {
  it("renders two select elements with initial values", () => {
    const wrapper = mount(Variant);
    const selects = wrapper.findAll("select");
    expect(selects.length).toBe(2);
    expect(selects[0].element.value).toBe("Apple");
    expect(selects[1].element.value).toBe("1");
  });
});
