import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on mobile viewports
    const isMobile = () => window.innerWidth < 768;

    if (isMobile()) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Show the custom cursor
    cursor.style.display = 'block';

    let currentHoverClass = '';
    let isCurrentlyClicking = false;

    const updateCursorClasses = () => {
      const point = cursor.querySelector('.custom-cursor-point');
      if (!point) return;
      
      const classes = ['custom-cursor-point'];
      if (currentHoverClass) classes.push(currentHoverClass);
      if (isCurrentlyClicking) classes.push('is-clicking');
      
      point.className = classes.join(' ');
    };

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    const handleMouseDown = (e) => {
      if (e.button !== 0) return; // Only left-click
      isCurrentlyClicking = true;
      updateCursorClasses();
    };

    const handleMouseUp = () => {
      isCurrentlyClicking = false;
      updateCursorClasses();
    };

    // Event delegation to detect hover states and contextual keywords dynamically
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // 1. Text input context
      const inputField = target.closest('input[type="text"], input[type="email"], input[type="search"], textarea');
      if (inputField) {
        currentHoverClass = 'hover-input';
        updateCursorClasses();
        return;
      }

      // 2. Project card context (detect category keywords)
      const projectCard = target.closest('[data-cursor="project"]');
      let hoverContext = null;
      if (projectCard) {
        const title = projectCard.querySelector('h3')?.textContent || '';
        const desc = projectCard.querySelector('p')?.textContent || '';
        const tagsText = Array.from(projectCard.querySelectorAll('.tech-tag')).map(t => t.textContent).join(' ');
        const combined = `${title} ${desc} ${tagsText}`.toLowerCase();
        
        const isDesign = combined.includes('farming') || combined.includes('tribal') || combined.includes('ui/ux') || combined.includes('figma') || combined.includes('design');
        hoverContext = isDesign ? 'design' : 'dev';
      } else {
        // 3. Buttons, links, navigation, and tags
        const interactive = target.closest('a, button, select, [role="button"], .cursor-pointer, .tech-tag');
        if (interactive) {
          const text = interactive.textContent.toLowerCase();
          
          const designKeywords = ['ui', 'ux', 'figma', 'design', 'about', 'resume', 'illustrations', 'branding', 'cv'];
          const devKeywords = ['react', 'mysql', 'sql', 'fullstack', 'database', 'github', 'code', 'api', 'backend', 'frontend', 'developer', 'node', 'projects', 'server'];
          
          const isDesign = designKeywords.some(kw => text.includes(kw));
          const isDev = devKeywords.some(kw => text.includes(kw));

          if (isDesign) {
            hoverContext = 'design';
          } else if (isDev) {
            hoverContext = 'dev';
          } else {
            hoverContext = 'general';
          }
        }
      }

      currentHoverClass = hoverContext ? `hover-${hoverContext}` : '';
      updateCursorClasses();
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform',
        display: 'none',
        transition: 'opacity 0.15s ease',
      }}
    >
      <div className="custom-cursor-point" />
    </div>
  );
};

export default CustomCursor;
