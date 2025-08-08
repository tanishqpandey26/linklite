import styles from "../styles/Home.module.css";
import Sidebar from '../components/Sidebar';
import SignUpForm from "../components/SignUpForm";

function Home() {
  return (
   <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
       <SignUpForm/>
      </div>
    </div>
  );
}

export default Home;
