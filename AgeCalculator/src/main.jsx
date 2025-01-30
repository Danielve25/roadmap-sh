import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyDatePicker from "./AgeCalculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyDatePicker />
  </StrictMode>
);
