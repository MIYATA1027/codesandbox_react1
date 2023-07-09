import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import CountHook from "./countHook";
import { Box } from "@mui/material";
import { Children } from "./children";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Box sx={{ width: "300px", height: "400px", background: "BLUE" }}>
      ここは親コンポーネントです
    </Box>
    <Children>親から子</Children>
  </React.StrictMode>
);
