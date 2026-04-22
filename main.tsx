console.log("main.tsx loaded");
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

console.log("root element:", document.getElementById("root"));
createRoot(document.getElementById("root")!).render(<App />);
