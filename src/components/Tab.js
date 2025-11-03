import React, { useState } from 'react'

const Tab = ({tabs}) => {
    const [activeTab, setActiveTab] = useState("Tab 1")
  return (
    <div>
    <ul>
        {tabs.map(tab => <li onClick={()=> setActiveTab(tab.title)} key={tab.title}>{tab.title}</li>)}
    </ul>
    <p>This is the content for Tab {activeTab}.</p>
    </div>
  )
}

export default Tab