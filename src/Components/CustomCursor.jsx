import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [hoverContext, setHoverContext] = useState(null); // 'design' | 'dev' | 'general' | 'input' | null
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [clicks, setClicks] = useState([]);

  // Refs for canvas and particles
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (hidden) setHidden(false);

      // Spawn trail particles based on mouse movement distance
      const dx = e.clientX - lastSpawnPos.current.x;
      const dy = e.clientY - lastSpawnPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 8) {
        const colors = ['#FFDE4D', '#A3E635', '#FB923C', '#F472B6', '#22D3EE', '#C084FC'];
        const shapes = ['circle', 'square', 'cross', 'triangle'];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 1.2;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx,
          vy,
          color,
          shape,
          size: 6 + Math.random() * 8, // size between 6 and 14
          alpha: 1.0,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1
        });

        lastSpawnPos.current = { x: e.clientX, y: e.clientY };
      }
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

    // Initial canvas sizing if ref already exists
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    // Smooth physics LERP loop
    const updateCursor = () => {
      // Update and draw canvas particles
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          for (let i = particles.current.length - 1; i >= 0; i--) {
            const p = particles.current[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.95;
            p.vy *= 0.95;
            p.alpha -= 0.025;
            p.size -= 0.08;
            p.rotation += p.rotationSpeed;

            if (p.alpha <= 0 || p.size <= 0) {
              particles.current.splice(i, 1);
              continue;
            }

            ctx.save();
            ctx.globalAlpha = p.alpha;

            if (p.shape === 'circle') {
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
              ctx.fillStyle = p.color;
              ctx.fill();
              ctx.lineWidth = 1.5;
              ctx.strokeStyle = '#000000';
              ctx.stroke();
            } else if (p.shape === 'square') {
              ctx.translate(p.x, p.y);
              ctx.rotate(p.rotation);
              ctx.fillStyle = p.color;
              ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
              ctx.lineWidth = 1.5;
              ctx.strokeStyle = '#000000';
              ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);
            } else if (p.shape === 'cross') {
              ctx.translate(p.x, p.y);
              ctx.rotate(p.rotation);
              ctx.beginPath();
              ctx.moveTo(-p.size / 2, 0);
              ctx.lineTo(p.size / 2, 0);
              ctx.moveTo(0, -p.size / 2);
              ctx.lineTo(0, p.size / 2);
              
              // Thick black outline
              ctx.lineWidth = 3.5;
              ctx.strokeStyle = '#000000';
              ctx.stroke();
              
              // Colored center line
              ctx.lineWidth = 1.5;
              ctx.strokeStyle = p.color;
              ctx.stroke();
            } else if (p.shape === 'triangle') {
              ctx.translate(p.x, p.y);
              ctx.rotate(p.rotation);
              ctx.beginPath();
              ctx.moveTo(0, -p.size / 2);
              ctx.lineTo(p.size / 2, p.size / 2);
              ctx.lineTo(-p.size / 2, p.size / 2);
              ctx.closePath();
              ctx.fillStyle = p.color;
              ctx.fill();
              ctx.lineWidth = 1.5;
              ctx.strokeStyle = '#000000';
              ctx.stroke();
            }
            
            ctx.restore();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    animationFrameId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('resize', handleResize);
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
      {/* High-performance canvas particle trail */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 999997,
        }}
      />

      {/* Click Ripples */}
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
