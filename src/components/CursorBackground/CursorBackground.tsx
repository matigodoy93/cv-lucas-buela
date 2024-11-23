import { useEffect, useState } from 'react';

const CursorBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false); // Estado para saber si está sobre un elemento

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        top: e.pageY - 125,
        left: e.pageX - 125,
      });
      // setIsVisible(true);

      console.log(e.pageY);
      
      if(e.pageY > 3590 && location.pathname == '/') { 
        setIsVisible(false) 
      } else { setIsVisible(true) };
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

  // Funciones para manejar el hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeaveElement = () => setIsHovered(false);

  return (
    <div
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: '250px',
        height: '250px',
        background: isHovered ? '#2a7cdf69' : '#E0E0E0', // Cambio de color
        borderRadius: '50%',
        filter: 'blur(50px)',
        transition: 'top 0.05s linear, left 0.05s linear, background 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'scale(1)' : 'scale(2.5)', // Expande el cursor cuando está sobre un elemento
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveElement}
    />
  );
};

export default CursorBackground;
