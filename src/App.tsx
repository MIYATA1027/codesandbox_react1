import { Route, Routes } from "react-router-dom";
import LayoutA from "./LayoutA";
import LayoutB from "./LayoutB";
import Home from "./Home";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutA />} />
      <Route path="Home" element={<Home />} />

      <Route element={<LayoutB />} />
    </Routes>
  );
}
