import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container} >
        <a href="https://github.com/JulianCallejas" target="_blank" rel="noreferrer">
            <img src="./img/JC-LOGO-Horizontal-25.svg" alt="{jc - develop} 2025" width="300" height="75" />
        </a>
    </footer>
  )
}

export default Footer