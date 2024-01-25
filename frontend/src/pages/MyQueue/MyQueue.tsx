import { useNavigate } from "react-router-dom";
import QueueItemList, { QueueItemListProps } from "./components/QueueItemList";

const listItem: QueueItemListProps[] = [
  { title: "Me mettre sur la file", redirect: "" },
  { title: "Statue de la file", redirect: "" },
  { title: "Les enseignes partenaires", redirect: "/mylv/myqueue/map" },
];

const MyQueue = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/mylv");
  };

  return (
    <div className="py-20">
      <div className="w-full h-14 border-b-gray-400 border-2 flex items-center px-5">
        <img
          src="../arrow-icon.svg"
          alt="arrow"
          className="w-6 h-6 rotate-180"
          onClick={handleRedirect}
        />
        <p className="mx-auto font-bold">MyLv</p>
      </div>
      <div className="px-8">
        {listItem.map((item, index) => {
          return <QueueItemList key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MyQueue;
