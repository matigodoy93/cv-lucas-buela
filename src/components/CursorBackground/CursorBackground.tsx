import React, { useState, useEffect } from 'react';
import './CursorBackground.css'

const CursorBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        top: e.pageY - 120,
        left: e.pageX - 120,
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('pointermove', handleMouseMove);
    document.addEventListener('pointerleave', handleMouseLeave);

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
      document.removeEventListener('pointerleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="cursor-bg"
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: '250px',
        height: '250px',
        background: '#2070d265',
        borderRadius: '50%',
        filter: 'blur(50px)',
        transition: 'top 0.05s linear, left 0.05s linear'
      }}
    />
  );
};

export default CursorBackground;
