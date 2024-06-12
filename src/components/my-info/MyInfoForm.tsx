"use client";
import { useState, useRef } from 'react';
import styles from './MyInfoForm.module.css';

export default function MyInfoForm() {
    const [style, setStyle] = useState({ transform: '', filter: '' });
    const [overlayStyle, setOverlayStyle] = useState({ backgroundPosition: '', filter: '' });
    const containerRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = -1 / 5 * x + 20;
        const rotateX = 4 / 30 * y - 20;
  
        setOverlayStyle({
          backgroundPosition: `${x / 5 + y / 5}%`,
          filter: `opacity(${x / 200}) brightness(1.2)`
        });
  
        setStyle({
          transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          filter: ''
        });
      }
    };
  
    const handleMouseOut = () => {
      setOverlayStyle({
        backgroundPosition: '',
        filter: 'opacity(0)'
      });
  
      setStyle({
        transform: 'perspective(350px) rotateY(0deg) rotateX(0deg)',
        filter: ''
      });
    };
  
    return (
      <div
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        ref={containerRef}
        style={style}
      >
        <div className={styles.overlay} style={overlayStyle}></div>
        <div className={styles.card}></div>
      </div>
    );
}