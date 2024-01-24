import { useNavigate } from 'react-router-dom';

export type ProfileItemProps = {
  icon: string;
  title: string;
  redirect?: string;
};

const ProfileItem = (props: ProfileItemProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (props.redirect) {
      navigate(props.redirect);
    }
  };

  return (
    <div
      className='flex justify-between border-t-0 border-x-0 border-b-gray-300 border-2 h-20 items-center'
      onClick={handleRedirect}>
      <div className='flex gap-2 items-center'>
        <img src={props.icon} alt='icon' className='w-10 h-10' />
        <p>{props.title}</p>
      </div>
      <img src='arrow-icon.svg' alt='arrow' className='w-6 h-6' />
    </div>
  );
};

export default ProfileItem;
