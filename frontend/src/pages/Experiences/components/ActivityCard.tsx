import { useState } from 'react';

export type ActivityCardProps = {
  src: string;
  alt: string;
  title: string;
  address: string;
  discount: string;
};

const ActivityCard = (props: ActivityCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((previousState) => !previousState);
  };

  return (
    <div className='group h-64 w-40 [perspective:1000px]'>
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        onClick={handleCardClick}>
        <div className='absolute inset-0'>
          <img
            className='h-full w-full object-cover rounded-xl shadow-xl shadow-black/40'
            src={props.src}
            alt={props.alt}
          />
        </div>
        <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 p-2 text-center flex flex-col gap-5 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <h1 className='font-bold '>{props.title}</h1>
          <p className='italic text-xs'>{props.address}</p>
          <p className='font-bold'>{props.discount}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
