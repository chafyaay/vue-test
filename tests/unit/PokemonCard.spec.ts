import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import PokemonCard from "../../src/components/PokemonCard.vue";

describe("PokemonCard.vue", () => {
  let wrapper;
  const pokemonData = {
    name: "pikachu",
    height: 0.4,
    weight: 6.0,
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://example.com/pikachu.png",
        },
      },
    },
    abilities: [
      { ability: { name: "static" }, is_hidden: true },
      { ability: { name: "lightning-rod" }, is_hidden: false },
    ],
  };

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/pokemon-details/:name", name: "pokemon-details" } as any,
    ],
  });

  beforeEach(() => {
    wrapper = mount(PokemonCard, {
      global: {
        plugins: [router],
      },
      props: {
        pokemon: pokemonData,
      },
    });
  });

  it("renders the Pokémon name, height, weight, and abilities correctly", () => {
    expect(wrapper.find(".card-title").text()).toBe("Pikachu");
    expect(wrapper.find(".card-text").text()).toContain("Height: 0.4 m");
    expect(wrapper.find(".card-text").text()).toContain("Weight: 6.0 kg");
    const abilities = wrapper.findAll(".card-abilities ul li");
    expect(abilities.length).toBe(1); // Only 1 ability should be shown (static) because it is hidden.
    expect(abilities[0].text()).toBe("static");
  });

  it("displays the correct Pokémon image", () => {
    const imgElement = wrapper.find("img.card-image");
    expect(imgElement.exists()).toBe(true);
    expect(imgElement.attributes("src")).toBe(
      "https://example.com/pikachu.png"
    );
  });

  it("navigates to the Pokémon details page on card click", async () => {
    await wrapper.find(".card").trigger("click");

    expect(wrapper.vm.$router.currentRoute.value.fullPath).toBe(
      "/pokemon-details/pikachu"
    );
  });

  it("only shows abilities that are not hidden", () => {
    const abilities = wrapper.findAll(".card-abilities ul li");
    expect(abilities.length).toBe(1); // Only the static ability should be visible
  });
});
