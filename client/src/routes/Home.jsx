import React from 'react';
import styles from "../styles/Home.module.css";
import Sidebar from '../components/Sidebar';

function Home() {
  return (
   <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        
      </div>
    </div>
  );
}

export default Home;

{/* <div className={styles.mainContent}>
    
      </div> */}