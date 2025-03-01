

import React, { useState, useRef } from 'react';
import styles from './Card3dHoloEffect.module.css';
import clsx from 'clsx';


interface Props {
    img: string;
    isActive: boolean;
}

const Card3dHoloEffect = ({ img, isActive }: Props) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);
        
      const handleMouseMove = (e: React.MouseEvent) => {
      if (cardRef.current) {
        const { offsetX: x, offsetY: y } = e.nativeEvent;
        const card = cardRef.current;
        const w = card.offsetWidth;
        const h = card.offsetHeight;
        const px = Math.abs(Math.floor((100 / w) * x) - 100);
        const py = Math.abs(Math.floor((100 / h) * y) - 100);
        const lp = 50 + (px - 50) / 1.25;
        const tp = 50 + (py - 50) / 1.25;
        const sprkPos = `background-position: ${px / 7}% ${py / 7}%`;
        const opacity = 20 + Math.abs((50 - px) + (50 - py)) * 1.5;
  
        card.style.transform = `rotateX(${(tp - 50) / 2}deg) rotateY(${(lp - 50) / 1.5}deg)`;
        card.style.setProperty('--sparkle-position', sprkPos);
        card.style.setProperty('--sparkle-opacity', `${opacity / 100}`);
        card.style.setProperty('--background-position', `background-position: ${lp}% ${tp}%`);
      }
    };
  
    const handleMouseOut = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        setIsHovered(false);
      }
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    return (
      <div
        ref={cardRef}
        className={`${styles.card} ${isHovered && styles.hovered}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        style={{ backgroundImage: `url("${img}")` }}
      >
        <div className={clsx(
            isActive ? styles.active : styles.inactive,
          )}
        ></div>
      </div>
    );
  };
  
export default Card3dHoloEffect