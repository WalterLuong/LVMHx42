import { AccountCircle, Favorite, Home, Settings } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="bg-slate-200 flex absolute bottom-0 w-screen overflow-hidden justify-around h-12 items-center border-t border-black">
      <Home className="font-bold" />
      <AccountCircle className="font-bold" />
      <Favorite className="font-bold" />
      <Settings className="font-bold" />
    </div>
  );
};

export default Navbar;
