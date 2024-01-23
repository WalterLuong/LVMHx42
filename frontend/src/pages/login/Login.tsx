const Login = () => {
  return (
    <div className='bg-slate-200 h-screen flex items-center justify-center'>
      <div className='border-2 border-yellow-500 p-8 bg-gray-800 rounded-lg shadow-xl'>
        <form className='gap-5 flex flex-col'>
          <p className='text-white font-bold text-2xl'>Login</p>
          <input type='text' />
          <input type='password' />
        </form>
      </div>
    </div>
  );
};

export default Login;
