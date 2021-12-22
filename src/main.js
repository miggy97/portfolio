import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@google/model-viewer";
import "@lottiefiles/lottie-player";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
