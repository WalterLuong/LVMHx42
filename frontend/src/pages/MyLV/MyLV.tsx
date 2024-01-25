import ProfileItem, { ProfileItemProps } from "./components/ProfileItem";

const itemsList: ProfileItemProps[] = [
  { icon: "profile-icon.svg", title: "Mes infos" },
  { icon: "address-icon.svg", title: "Mon carnet d'adresses" },
  { icon: "rdv-icon.svg", title: "Mes rendez-vous" },
  { icon: "queue-icon.svg", title: "Ma file", redirect: "/myqueue" },
  { icon: "care-icon.svg", title: "Mon Care Service" },
  { icon: "purchase-icon.svg", title: "Mes achats" },
  { icon: "purchase-icon.svg", title: "Mes achats" },
  { icon: "purchase-icon.svg", title: "Mes achats" },
  { icon: "purchase-icon.svg", title: "Mes achats" },
  { icon: "purchase-icon.svg", title: "Mes achats" },
];

const MyLV = () => {
  return (
    <div className='pb-16 pt-28 px-5 bg-white h-svh flex flex-col gap-5'>
      <h1 className='mt-5'>Bonjour,</h1>
      <h1 className='text-5xl font-bold'>Walter</h1>
      <div className='overflow-auto'>
        {itemsList.map((item, index) => {
          return <ProfileItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MyLV;
