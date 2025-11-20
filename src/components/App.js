
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";
import Tooltip from "./Tooltip";

const App = () => {
  // const tabs = [
  //   {title:"Tab 1", content: "Tab one"},
  //   {title:"Tab 2", content: "Tab one"},
  //   {title:"Tab 3", content: "Tab one"}
  // ]
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <Tab tabs={tabs}/> */}
        <Tooltip tooltiptext={"Thank you"}>
          <p className="tooltip">Hover over me</p>
        </Tooltip>
        <Tooltip tooltiptext={"Thank you again"}>
          <p className="tooltip">Hover over me once more</p>
        </Tooltip>
    </div>
  )
}

export default App
