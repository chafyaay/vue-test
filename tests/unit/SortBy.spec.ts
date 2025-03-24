import { mount } from "@vue/test-utils";
import SortBy from "../../src/components/SortBy.vue";

describe("SortBy.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SortBy);
  });

  it("renders the dropdown with options", () => {
    const selectElement = wrapper.find("select.select-dropdown");
    const options = wrapper.findAll("option");

    expect(selectElement.exists()).toBe(true);

    expect(options).toHaveLength(4);

    expect(options[0].text()).toBe("Sort by");

    expect(options[1].text()).toBe("Name");
    expect(options[2].text()).toBe("Height");
    expect(options[3].text()).toBe("Weight");
  });

  it("updates sortByValue when an option is selected", async () => {
    const selectElement = wrapper.find("select.select-dropdown");

    await selectElement.setValue("height");

    expect(wrapper.vm.sortByValue).toBe("height");
  });

  it("sets default value of sortByValue to an empty string", () => {
    expect(wrapper.vm.sortByValue).toBe("");
  });

  it("renders the correct selected value when the option is chosen", async () => {
    const selectElement = wrapper.find("select.select-dropdown");

    await selectElement.setValue("weight");

    expect(wrapper.vm.sortByValue).toBe("weight");

    expect(selectElement.element.value).toBe("weight");
  });
});
