import { mount } from "@vue/test-utils";
import MyComponent from "../../src/components/MyComponent.vue"; // Adjust the path as necessary

describe("MyComponent.vue", () => {
  it("should update nbrCardsPerPage when selecting an option", async () => {
    // Mount the component
    const wrapper = mount(MyComponent);

    // Check the default value of nbrCardsPerPage
    expect(wrapper.vm.nbrCardsPerPage).toBe(10);

    // Find the select element and change the value
    const select = wrapper.find("select");
    await select.setValue("20"); // Set value to 20

    // After the change, check if nbrCardsPerPage was updated
    expect(wrapper.vm.nbrCardsPerPage).toBe(20);

    // Optionally, check the selected option visually (for DOM testing)
    const selectedOption = wrapper.find("select").element.value;
    expect(selectedOption).toBe("20");
  });

  it("should trigger changeHandler on value change", async () => {
    const changeHandler = jest.fn();
    const wrapper = mount(MyComponent, {
      methods: {
        changeHandler,
      },
    });

    // Simulate change event
    const select = wrapper.find("select");
    await select.setValue("50");

    // Check if the changeHandler function was called
    expect(changeHandler).toHaveBeenCalled();
  });
});
