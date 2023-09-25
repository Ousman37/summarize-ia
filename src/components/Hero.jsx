import { IoSettingsSharp } from 'react-icons/io5';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <a href='/'>
          <h1 className='text-4xl font-bold flex items-center'>
            <IoSettingsSharp className='text-yellow-500 ml-2' />
            SAI
          </h1>
        </a>
        {/* <img src={logo} alt='logo-icon' className='w-28 object-contain' /> */}

        <button
          type='button'
          onClick={() => {
            window.open('https://github.com/Ousman37');
          }}
          className='black_btn'>
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Welcome to Summarization with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4 </span>
      </h1>
      <h2 className='desc'>
        Summize is your open-source article summarizer, designed to transform
        extensive articles into clear and concise summaries, making your reading
        experience more efficient and enjoyable.
      </h2>
    </header>
  );
};

export default Hero;
