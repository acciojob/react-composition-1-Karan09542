
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const App = () => {
  const tabs = [
    {title:"Tab 1", content: "Tab one"},
    {title:"Tab 2", content: "Tab one"},
    {title:"Tab 3", content: "Tab one"}
  ]
  return (
    <div>
        {/* Do not remove the main div */}
        <Tab tabs={tabs}/>
    </div>
  )
}

export default App
