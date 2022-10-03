import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { setupStore } from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);
const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
