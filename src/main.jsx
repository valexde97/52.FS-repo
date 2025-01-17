import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//Корневой ссs файл проекта
import "./index.css";
import App from "./App.jsx";

//Код в тегах ниже будет отображаться в div с id root на странице
createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
