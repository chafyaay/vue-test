import { mount } from "@vue/test-utils";
import Navigation from "../../src/components/Navigation.vue";

describe("Navigation.vue", () => {
  it('emits the correct event with -1 when "Previous" button is clicked', async () => {
    const wrapper = mount(Navigation);

    await wrapper.find(".btn").trigger("click");
    expect(wrapper.emitted("set-page-index")).toBeTruthy();
    expect(wrapper.emitted("set-page-index")?.[0]).toEqual([-1]);
  });

  it('emits the correct event with 1 when "Next" button is clicked', async () => {
    const wrapper = mount(Navigation);

    await wrapper.findAll(".btn")[1].trigger("click");

    expect(wrapper.emitted("set-page-index")).toBeTruthy();
    expect(wrapper.emitted("set-page-index")?.[0]).toEqual([1]);
  });
});
