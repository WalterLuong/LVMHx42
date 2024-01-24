import { useNavigate } from 'react-router-dom';

const CloseButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/experiences');
  };
  return (
    <div
      className='absolute top-5 left-5 border-2 border-LV-dark-yellow h-10 w-10 flex items-center justify-center text-4xl rotate-45 rounded-full text-LV-dark-yellow'
      onClick={handleButtonClick}>
      <p className='active:scale-150 transition-all duration-200 select-none'>
        +
      </p>
    </div>
  );
};

export default CloseButton;
