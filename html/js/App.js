import React from "react";
import { createRoot } from "react-dom/client";

import HomeContent from "./HomeContent";

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(HomeContent));
