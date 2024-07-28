import { StrictMode } from "react";
import ReactDOM from "react-dom";
import LowHighLimit from "./LowHighLimit";


ReactDOM.render(
  <StrictMode>
    <LowHighLimit current={70} min={0} max={100} low={25} high={80} optimal={60}  />
  </StrictMode>,
  document.getElementById("root")
);
