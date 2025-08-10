import { useState } from "react";

interface TabsProps {
  tabBodies: Array<{ title: string, body?: React.ReactNode }>
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
 
  const headers = props.tabBodies.map((tabBody, i) => {
    return (
      <div className="st-details-header me-2 cursor-pointer" key={i + tabBody.title} 
        onClick={() => setActiveTab(i)} >
        <h4 className={classNames(activeTab === i ? 'text-cyan-900 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-500 border-b border-cyan-600 dark:border-cyan-500' : 'text-gray-700 dark:text-gray-400 hover:text-gray-600 hover:border-b hover:border-gray-300 dark:hover:text-gray-300', 'text-sm inline-block pb-1',)}>
          {tabBody.title}
        </h4>
      </div>
    )
  });

  let activeTabBody = props.tabBodies[activeTab];

  if(activeTabBody === null || activeTabBody === undefined){
    return null;
  }

  return (
    <div className="font-medium text-gray-500 dark:text-gray-400" key={activeTab}>
      <div className={"flex flex-wrap mt-4 gap-4"} >
        {headers}
      </div>
      <div className="tab-bodies-container">
        {activeTabBody.body}
      </div>
    </div>
  )
}