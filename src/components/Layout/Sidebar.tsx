import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Navigation</h2>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/main">Main</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
