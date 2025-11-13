import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SingleSelect from "../src/components/SingleSelect.vue";

describe("SingleSelect Component", () => {
  it("emits selected primitive value", async () => {
    const wrapper = mount(SingleSelect, {
      props: { options: ["a", "b", "c"] }
    });

    await wrapper.find("select").setValue("b");

    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["b"]);
  });

  it("emits selected object", async () => {
    const options = [
      { label: "One", value: 1 },
      { label: "Two", value: 2 }
    ];
    const wrapper = mount(SingleSelect, { props: { options } });

    await wrapper.find("select").setValue("2");

    expect(wrapper.emitted()["update:modelValue"][0]).toEqual([options[1]]);
  });
});
