import { mount } from "@vue/test-utils";
import SearchBar from "../../src/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SearchBar);
  });

  it("renders the input fields and button", () => {
    const searchQueryInput = wrapper.find("input.form-control");
    expect(searchQueryInput.exists()).toBe(true);

    const searchByInput = wrapper.find("input.search-by-input");
    expect(searchByInput.exists()).toBe(true);

    const searchButton = wrapper.find("button.btn");
    expect(searchButton.exists()).toBe(true);
  });

  it("updates searchQuery when user types in search query input", async () => {
    const searchQueryInput = wrapper.find("input.form-control");
    await searchQueryInput.setValue("Pikachu");
    expect(wrapper.vm.searchQuery).toBe("Pikachu");
  });

  it("toggles the dropdown when searchBy input is focused", async () => {
    const searchByInput = wrapper.find("input.search-by-input");

    let dropdown = wrapper.find(".dropdown");
    expect(dropdown.exists()).toBe(false);

    await searchByInput.trigger("focus");
    dropdown = wrapper.find(".dropdown");
    expect(dropdown.exists()).toBe(true);
  });

  it("hides the dropdown and updates searchBy when an option is selected", async () => {
    const searchByInput = wrapper.find("input.search-by-input");

    await searchByInput.trigger("focus");

    const option = wrapper.findAll(".dropdown li").at(0);
    await option.trigger("click");

    let dropdown = wrapper.find(".dropdown");
    expect(dropdown.exists()).toBe(false);

    expect(wrapper.vm.searchBy).toBe("Pokemon");
  });

  it("emits the correct search query when search button is clicked", async () => {
    await wrapper.setData({ searchQuery: "Pikachu", searchBy: "pokemon" });

    const searchButton = wrapper.find("button.btn");
    await searchButton.trigger("click");

    expect(wrapper.emitted("search-query-event")).toBeTruthy();
    expect(wrapper.emitted("search-query-event")[0]).toEqual([
      { searchBy: "pokemon", searchQuery: "Pikachu" },
    ]);
  });
});
