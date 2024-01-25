import { useNavigate } from "react-router-dom";

export type QueueItemListProps = {
  title: string;
  redirect?: string;
};

const QueueItemList = (props: QueueItemListProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (props.redirect) {
      navigate(props.redirect);
    }
  };

  return (
    <div
      className="flex justify-between border-t-0 border-x-0 border-b-gray-300 border-2 h-20 items-center"
      onClick={handleRedirect}
    >
      <p>{props.title}</p>
      <img src="../arrow-icon.svg" alt="arrow" className="w-6 h-6" />
    </div>
  );
};

export default QueueItemList;
