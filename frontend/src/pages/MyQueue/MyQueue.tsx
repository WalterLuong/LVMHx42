import QueueItemList from './components/QueueItemList';

const listItem: string[] = [
  'Me mettre sur la file',
  'Statue de la file',
  'Les enseignes partenaires',
];

const MyQueue = () => {
  return (
    <div>
      <h1>My Queue</h1>
      {listItem.map((item, index) => {
        return <QueueItemList key={index} title={item} />;
      })}
    </div>
  );
};

export default MyQueue;
