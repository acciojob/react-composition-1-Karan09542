
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const App = () => {
  const tabs = [
    "Tab 1",
    "Tab 2",
    "Tab 3"
  ]
  return (
    <div>
        {/* Do not remove the main div */}
        <Tab tabs={tabs}/>
    </div>
  )
}

export default App
