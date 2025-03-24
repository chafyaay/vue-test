import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./routes";
import "./assets/main.css"; // Tailwind CSS

createApp(App).use(routes).mount("#app");
