import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Veuillez remplir tous les champs");
      return;
    } else if (username === "good_client" && password === "1234") {
      setUsername("");
      setPassword("");
      setError("");
      navigate("/");
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className='bg-white h-svh flex items-center justify-center flex-col'>
      <img
        src='LV-logo.svg'
        alt='LV logo'
        className='w-20 h-20 absolute top-10'
      />
      <form className='gap-5 flex flex-col' onSubmit={onSubmit}>
        <p className='font-bold text-2xl'>Connexion</p>
        <div className='flex flex-col'>
          <label htmlFor='username' className='text-LV-gray text-xs font-bold'>
            Nom d'utilisateur*
          </label>
          <input
            type='text'
            placeholder='good_client'
            className='px-2 border border-black'
            id='username'
            autoComplete='false'
            value={username}
            onChange={handleUsernameChange}
            ref={usernameRef}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='text-LV-gray text-xs font-bold'>
            Mot de passe*
          </label>
          <input
            type='password'
            placeholder='****'
            className='px-2 border border-black'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            ref={passwordRef}
            required
          />
        </div>
        {error && <p className='text-xs text-red-500'>{error}</p>}
        <button className='h-14 bg-black text-white rounded-full border border-black hover:bg-white hover:text-black transition-all duration-500'>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
