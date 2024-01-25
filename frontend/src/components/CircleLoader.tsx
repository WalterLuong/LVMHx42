import React from 'react';

const CircleLoader = ({ percentage, minutes, height, width }: { percentage: number, minutes: boolean, height: number, width:number }) => {

    const conicGradient = minutes ? `conic-gradient(black ${percentage}%, 0, white ${percentage}%)` : ''
    const CircleClass = `flex justify-center items-center shadow-xl rounded-full bg-[#BBA98C]`
    const description = minutes ? 'Mnutes restantes' : 'Personnes devant vous'
  return (
    <>
    <div className='flex flex-col w-full h-full items-center justify-around mt-2'>
      <div className={CircleClass} style={{height : `${height}px`, width: `${width}px`}}>
          <div className="h-[90%] w-[90%] rounded-full overflow-hidden">
                <div
                  className="h-full w-full flex justify-center items-center shadow-xl"
                  style={{ background: conicGradient }}
                  > 
                  
                  <div className="flex justify-center items-center h-[90%] w-[90%] shadow-inner[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-full bg-[#BBA98C] text-black">
                      {percentage} {minutes ? 'minutes' : null }
                  </div>
              </div>
          </div>
        </div>
        <span className='text-xs p-2'>{description}</span>
        </div>

      </>
  );
};

export default CircleLoader;
