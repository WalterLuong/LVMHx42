import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type ActivityCardProps = {
  src: string;
  alt: string;
  title: string;
  address: string;
  discount: string;
  redirect?: string;
};

const ActivityCard = (props: ActivityCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsFlipped((previousState) => !previousState);
  };

  const handleRedirect = () => {
    if (props.redirect) {
      navigate(props.redirect);
    } else {
      navigate('/dior');
    }
  };

  return (
    <div
      className='group h-64 w-40 [perspective:1000px]'
      onClick={handleCardClick}>
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}>
        <div className='absolute inset-0'>
          <img
            className='h-full w-full object-cover rounded-xl shadow-xl shadow-black/40'
            src={props.src}
            alt={props.alt}
          />
        </div>
        <div className='absolute inset-0 h-full w-full justify-center rounded-xl bg-black/60 p-2 text-center flex flex-col gap-5 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <h1 className='font-bold '>{props.title}</h1>
          <p className='italic text-xs'>{props.address}</p>
          <p className='font-bold'>{props.discount}</p>
          <button
            className='border-2 border-white rounded-full'
            onClick={handleRedirect}>
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
