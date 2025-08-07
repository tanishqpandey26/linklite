import React from 'react';
import styles from "../styles/Home.module.css";
import Sidebar from '../components/Sidebar';
import HeroSection from "../components/HeroSection";

function Home() {
  return (
   <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <HeroSection/>
      </div>
    </div>
  );
}

export default Home;

{/* <div className={styles.mainContent}>
    
      </div> */}