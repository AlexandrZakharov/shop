import styles from "./About.module.css";
import Header from '../../common/Header';

const About = (props) => {
  return (
    <div className={styles.about}>
      <Header />
      <div className="Container">About</div>
    </div>
  )
}

export default About;