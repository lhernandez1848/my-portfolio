import { useState } from 'react'
import TabBody from './TabBody'
import './Tabs.scss'

export default function Tab(props: { tabs: any }) {
  const [tabIndex, setTabIndex] = useState(0);

  return <div className='tabMain'>
    <ul className='tabList'>
      {props.tabs &&
        props.tabs.map((tab: any, index: number ) => {
          return <li key={index} className={tabIndex === index ? 'activeTab' : 'inactiveTab'} onClick={() => setTabIndex(index)}>{tab.tabName}</li>
        })
      }
    </ul>
    <TabBody body={props.tabs[tabIndex].body} />
  </div>
}