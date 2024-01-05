import { useState } from 'react';
import styles from './tabs.module.css';
import TabBody from './TabBody';

export default function Tab(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return <div className={styles.tabMain}>
    <ul className={styles.tabList}>
      {props.tabs &&
        props.tabs.map((tab, index) => {
          return <li key={index} className={tabIndex === index ? styles.activeTab : styles.inactiveTab} onClick={() => setTabIndex(index)}>{tab.name}</li>
        })
      }
    </ul>
    <TabBody body={props.tabs[tabIndex].body} />
  </div>
}