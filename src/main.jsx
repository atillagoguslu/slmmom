import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/reset.css";
import "./assets/css/index.css";
import App from "./components/app/App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/slim-mom-frontend">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
