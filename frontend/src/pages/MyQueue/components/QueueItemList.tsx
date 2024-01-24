const QueueItemList = (props: { title: string }) => {
  return (
    <div className='flex justify-between border-t-0 border-x-0 border-b-gray-300 border-2 h-20 items-center'>
      <p>{props.title}</p>
      <img src='../arrow-icon.svg' alt='arrow' className='w-6 h-6' />
    </div>
  );
};

export default QueueItemList;
