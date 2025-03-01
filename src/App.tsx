import SkillTree from './Components/SkillTree/SkillTree';
import styles from './App.module.css';
import LogBox from './Components/LogBox/LogBox';
import Footer from './Components/Footer/Footer';


function App() {
    return (
        <div className={styles.app}>
            <section className={styles.header} >
                <h1 className={styles.title } >Age of Drag<span><img src="./img/Logo100.webp" alt="logo" className={styles.logoLetter} /></span>n<span><img src="./img/s-dragon.webp" alt="logo" className={styles.sLogo} /></span></h1>
                <h5  className={styles.subtitle } >A skill tree project</h5>
            </section>
            <main className={styles.mainContainer}>
                <SkillTree />
                <LogBox />
            </main>
            <Footer />
        </div>
    );
}

export default App;
