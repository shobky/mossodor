"use client"
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [scale, setScale] = useState(1); // State for managing scale

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setPosition({ x: e.clientX , y: e.clientY });
    };

    const handleMouseDown = () => setScale(0.8);
    const handleMouseUp = () => setScale(1.2);

    // Define mouse enter and leave functions
    const handleMouseEnter = () => setScale(0.7); // Scale down when hovering over interactive elements
    const handleMouseLeave = () => setScale(1); // Reset scale when not hovering

    const addHoverListeners = (selector:any) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const removeHoverListeners = (selector:any) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Apply the hover effect to all links and buttons
    addHoverListeners('a, button');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      // Clean up: Remove hover listeners
      removeHoverListeners('a, button');
    };
  }, []);

  useEffect(() => {
    if (scale > 1) {
      const timeoutId = setTimeout(() => setScale(1), 150); // Delay to simulate "bounce back"
      return () => clearTimeout(timeoutId);
    }
  }, [scale]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 pointer-events-none w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 ${hidden ? 'hidden' : ''}`}
        style={{ backgroundImage: 'url(/path-to-your-cursor-image.png)', backgroundSize: 'cover', transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div
        className={`fixed top-0 left-0 z-40 pointer-events-none w-8 h-8 bg-primary/20 rounded-full opacity-75 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${hidden ? 'hidden' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})` }}
      />
    </>
  );
}
