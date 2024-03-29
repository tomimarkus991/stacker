import { ColorModeScript } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <ColorModeScript />
    <App />
  </>
);
