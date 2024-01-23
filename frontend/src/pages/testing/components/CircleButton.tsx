const CircleButton = () => {
  return (
    <div className='w-16 h-16 border-4 border-white rounded-full flex items-center justify-center'>
      <div className='w-11 h-11 bg-white rounded-full active:scale-[140%] transition-all duration-200'></div>
    </div>
  );
};

export default CircleButton;
