import React from 'react';

const CircleLoader = ({ percentage }: { percentage: number }) => {
  const conicGradient = `conic-gradient(black ${percentage}%, transparent ${percentage}%)`;

  return (
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <div
        className="w-full h-full bg-gradient-to-r from-black to-transparent"
        style={{ background: conicGradient }}
      ></div>
    </div>
  );
};

export default CircleLoader;
