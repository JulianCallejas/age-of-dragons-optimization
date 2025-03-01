import styles from "./AnimatedBG.module.css"
import clsx from 'clsx';

const images = ["./img/boardbg.webp", "./img/boardbg2.webp", "./img/boardbg3.webp", "./img/boardbg4.webp", "./img/boardbg5.webp"]
const img = images[Math.floor(Math.random() * images.length)];
const img2 = images[Math.floor(Math.random() * images.length)];

const AnimatedBG = () => {
    return (
    <>
        <img className={clsx("bganimation", styles.background)} src={img} alt="background" />
        <img className={clsx("bganimation", styles.background)} src={img2} alt="background" />
    </>
  )
}

export default AnimatedBG