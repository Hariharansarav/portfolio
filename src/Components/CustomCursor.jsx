import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [hoverContext, setHoverContext] = useState(null); // 'design' | 'dev' | 'general' | 'input' | null
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [clicks, setClicks] = useState([]);

  // Refs for high-performance direct style and text manipulation
  const pointerRef = useRef(null);
  const followerRef = useRef(null);

  // Position coordinates
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseDown = (e) => {
      if (e.button !== 0) return; // Only trigger for left-click
      setIsClicking(true);
      
      const newClick = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      };
      
      setClicks((prev) => [...prev, newClick]);
      
      setTimeout(() => {
        setClicks((prev) => prev.filter(c => c.id !== newClick.id));
      }, 500);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Event delegation to detect hover states and contextual keywords dynamically
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // 1. Text input context
      const inputField = target.closest('input[type="text"], input[type="email"], input[type="search"], textarea');
      if (inputField) {
        setHoverContext('input');
        return;
      }

      // 2. Project card context (detect category keywords)
      const projectCard = target.closest('[data-cursor="project"]');
      if (projectCard) {
        const title = projectCard.querySelector('h3')?.textContent || '';
        const desc = projectCard.querySelector('p')?.textContent || '';
        const tagsText = Array.from(projectCard.querySelectorAll('.tech-tag')).map(t => t.textContent).join(' ');
        const combined = `${title} ${desc} ${tagsText}`.toLowerCase();
        
        const isDesign = combined.includes('farming') || combined.includes('tribal') || combined.includes('ui/ux') || combined.includes('figma') || combined.includes('design');
        setHoverContext(isDesign ? 'design' : 'dev');
        return;
      }

      // 3. Buttons, links, navigation, and tags
      const interactive = target.closest('a, button, select, [role="button"], .cursor-pointer, .tech-tag');
      if (interactive) {
        const text = interactive.textContent.toLowerCase();
        
        const designKeywords = ['ui', 'ux', 'figma', 'design', 'about', 'resume', 'illustrations', 'branding', 'cv'];
        const devKeywords = ['react', 'mysql', 'sql', 'fullstack', 'database', 'github', 'code', 'api', 'backend', 'frontend', 'developer', 'node', 'projects', 'server'];
        
        const isDesign = designKeywords.some(kw => text.includes(kw));
        const isDev = devKeywords.some(kw => text.includes(kw));

        if (isDesign) {
          setHoverContext('design');
        } else if (isDev) {
          setHoverContext('dev');
        } else {
          setHoverContext('general');
        }
        return;
      }

      setHoverContext(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Smooth physics LERP loop
    const updateCursor = () => {
      // 1. Pointer (Core dot) tracks mouse instantly
      if (pointerRef.current) {
        pointerRef.current.style.left = `${mousePos.current.x}px`;
        pointerRef.current.style.top = `${mousePos.current.y}px`;
      }

      // 2. Follower frame lags behind with LERP
      const lerpFactor = 0.15;
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * lerpFactor;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * lerpFactor;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`;
        followerRef.current.style.top = `${followerPos.current.y}px`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    animationFrameId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile, hidden, hoverContext]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* 1. Snappy Pointer Core Dot */}
      <div 
        ref={pointerRef} 
        className={`custom-reticle-pointer ${hoverContext ? `context-${hoverContext}` : ''} ${isClicking ? 'is-clicking' : ''}`} 
      />

      {/* 2. Lagging Follower Frame */}
      <div
        ref={followerRef}
        className={`custom-reticle-follower ${hoverContext ? `context-${hoverContext}` : ''} ${isClicking ? 'is-clicking' : ''}`}
      />

      {/* 3. Click Ripples */}
      {clicks.map((click) => (
        <div
          key={click.id}
          className="custom-cursor-ripple"
          style={{ left: `${click.x}px`, top: `${click.y}px` }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
