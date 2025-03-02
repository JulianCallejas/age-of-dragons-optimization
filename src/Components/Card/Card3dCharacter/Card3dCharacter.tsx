import clsx from 'clsx';
import Card3dHoloEffect from '../Card3dHoloEffect/Card3dHoloEffect';
import styles from './Card3dCharacter.module.css';
import { URL } from '../../../config/config';

interface Props {
    img: string;
    canActivate: boolean;
    isActive: boolean;
}

const Card3dCharacter = ({ img, canActivate, isActive }: Props) => {
    
    return (
        <>
        <div className={styles.card}>
            <div className={clsx(
                    styles.wrapper,
                    canActivate && styles.canActivate,
                    !isActive && styles.inactive
                )}
            >
                <img className={styles["cover-image"]} src={`${URL}/img/${img}.webp`} />
            </div>
            <div className={styles.light}></div>
            <div className={styles.character}>
                <Card3dHoloEffect img={`../img/${img}NoBG.webp`} isActive={isActive} />
            </div>
        </div>


</>
    )
}

export default Card3dCharacter