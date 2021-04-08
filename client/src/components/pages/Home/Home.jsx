import styles from "./Home.module.css";
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Header active={"Home"} />
      <Navbar />
    </div>
  );
};

export default Home;
