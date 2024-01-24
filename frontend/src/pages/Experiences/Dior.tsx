import { useState } from 'react';
import CloseButton from './components/CloseButton';

const Dior = () => {
  const [map, setMap] = useState(false);

  const handleMapClick = () => {
    setMap((previousState) => !previousState);
  };

  return (
    <div className='bg-slate-200 h-screen flex flex-col items-center py-5 overflow-auto pb-20'>
      <CloseButton />
      <img src='LV-logo.svg' alt='LV logo' className='h-20 w-20 my-10' />
      <p className='self-start font-bold text-2xl border-b-LV-dark-yellow border-2 w-full pl-3'>
        Galerie <span className='text-LV-dark-yellow'>D</span>ior
      </p>
      <div className='h-52 overflow-hidden mb-5'>
        <img src='dior.jpg' alt='dior' className='' />
      </div>
      <div className='flex flex-col mb-5 w-full'>
        <div className='flex justify-around w-full'>
          <p className=''>30 avenue Montaigne, Paris</p>
          <p
            className=' border-black border rounded-full w-5 h-5 items-center justify-center flex rotate-90'
            onClick={handleMapClick}>
            {'>'}
          </p>
        </div>
        {map && <img src='LV-dior-map.png' alt='map' />}
      </div>
      <p className='font-bold'>Nouvelle exposition à la Galerie Dior</p>
      <p className='px-2 italic'>
        Jusqu'au 13 mai 2024, un nouveau récit scénographique met en lumière les
        liens étroits qui unissent Dior et les femmes.
      </p>
      <a
        href='https://www.galeriedior.com/'
        className='underline text-xs italic text-LV-yellow'>
        https://www.galeriedior.com/
      </a>
    </div>
  );
};

export default Dior;
