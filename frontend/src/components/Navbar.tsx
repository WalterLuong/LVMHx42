import { AccountCircle, Favorite, Home, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-slate-200 flex absolute bottom-0 w-screen overflow-hidden z-10 justify-around h-12 items-center border-t border-black'>
      <Link to='/'>
        <Home className='font-bold' />
      </Link>
      <Link to='/login'>
        <AccountCircle className='font-bold' />
      </Link>
	  <Link to='/wait'>
	 	 <Favorite className='font-bold' />
		</Link>
      <Settings className='font-bold' />
    </div>
  );
};

export default Navbar;
