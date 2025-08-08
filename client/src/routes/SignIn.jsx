import styles from "../styles/Home.module.css";
import Sidebar from '../components/Sidebar';
import SignInForm from "../components/SignInForm";

function Home() {
  return (
   <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
       <SignInForm/>
      </div>
    </div>
  );
}

export default Home;
