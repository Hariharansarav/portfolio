import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Event delegation to detect hover state dynamically on interactive items
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, select, input, textarea, [role="button"], .cursor-pointer')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Core center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isClicked ? 'scale(0.8)' : 'scale(1)'}`,
          backgroundColor: isHovered ? '#F472B6' : '', // Pink highlight on hover
        }}
      />
      {/* Trailing follower ring */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.4) rotate(45deg)' : isClicked ? 'scale(0.85)' : 'scale(1) rotate(0deg)'}`,
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.1)' : 'transparent', // Cyan translucent bg on hover
          borderColor: isHovered ? '#22D3EE' : '', // Cyan border on hover
          boxShadow: isHovered ? '2.5px 2.5px 0px 0px #22D3EE' : undefined,
        }}
      />
    </>
  );
};

export default CustomCursor;
