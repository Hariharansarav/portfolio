import React from 'react';

const SkillsBorder = ({ direction = 'left', bgClass = 'bg-cv-yellow' }) => {
  const skills = [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MSSQL',
    'Tailwind CSS',
    'Figma',
    'Python',
    'Git & GitHub'
  ];

  const separatorColors = [
    'text-cv-pink',
    'text-cv-yellow',
    'text-cv-cyan',
    'text-cv-green',
    'text-cv-purple'
  ];

  const getSlashColor = (index, currentBg) => {
    const bgToColorName = {
      'bg-cv-yellow': 'text-cv-yellow',
      'bg-cv-pink': 'text-cv-pink',
      'bg-cv-cyan': 'text-cv-cyan',
      'bg-cv-green': 'text-cv-green',
      'bg-cv-purple': 'text-cv-purple',
    };
    
    let color = separatorColors[index % separatorColors.length];
    if (bgToColorName[currentBg] === color) {
      color = separatorColors[(index + 1) % separatorColors.length];
    }
    return color;
  };

  // Helper component to render repeating items for a seamless infinite scroll loop
  const MarqueeTrack = () => (
    <>
      {Array(4).fill(skills).flat().map((skill, index) => {
        const slashColor = getSlashColor(index, bgClass);
        return (
          <span key={index} className="inline-flex items-center gap-3.5 mx-1.5 select-none">
            <span className="text-black font-mono font-black uppercase text-[11px] tracking-wider">
              {skill}
            </span>
            <span className={`${slashColor} font-mono font-black text-xs`}>//</span>
          </span>
        );
      })}
    </>
  );

  const animationClass = direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left';

  return (
    <div className={`w-full ${bgClass} border-y-3 border-black py-2.5 my-16 overflow-hidden flex items-center select-none`}>
      <div className={`flex whitespace-nowrap ${animationClass} min-w-full items-center`}>
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
};

export default SkillsBorder;
