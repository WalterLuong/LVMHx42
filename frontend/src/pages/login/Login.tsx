import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
    if (username === '' || password === '') {
      setError('Veuillez remplir tous les champs');
      return;
    } else if (username === 'good_client' && password === '1234') {
      setUsername('');
      setPassword('');
      setError('');
      navigate('/join');
    } else {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className='bg-[url("LV-mobile-bg.jpg")] bg-no-repeat bg-center bg-black h-screen flex items-center justify-center'>
      <div className='border-2 border-LV-dark-yellow p-8 bg-LV-dark-brown rounded-lg bg-opacity-75'>
        <form className='gap-5 flex flex-col' onSubmit={onSubmit}>
          <p className='text-LV-gray font-bold text-2xl'>Connexion</p>
          <div className='flex flex-col'>
            <label
              htmlFor='username'
              className='text-LV-gray text-xs font-bold'>
              Nom d'utilisateur
            </label>
            <input
              type='text'
              placeholder='good_client'
              className='px-2'
              id='username'
              autoComplete='false'
              value={username}
              onChange={handleUsernameChange}
              ref={usernameRef}
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='password'
              className='text-LV-gray text-xs font-bold'>
              Mot de passe
            </label>
            <input
              type='password'
              placeholder='****'
              className='px-2'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              ref={passwordRef}
            />
          </div>
          {error && <p className='text-xs text-red-500'>{error}</p>}
          <button className='bg-LV-dark-yellow hover:bg-LV-yellow rounded-full'>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
