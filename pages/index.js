import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="grid place-items-center h-screen">
      < div className="grid justify-center">

          {currentTheme === 'dark' ? 
          (
            <button
              className=" bg-black-700 hover:bg-black w-15 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >
              <Image src="/sun.svg" alt="logo" height="50" width="50" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-15 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height="50" width="50"  />
            </button>
          )}
        <span className="dark:text-purple-600 text-center font-semibold text-4xl p-12">Hello I'm </span>
        <h1 className="text-7xl font-bold text-center grid">
        
          {'Isaac '} { 'Kiplangat'}
        </h1>
        <p className="dark:text-purple-600 my-8 text-center text-2xl pt-5">
          I write code and push to <span className='text-blue-600 font-semibold'>Github</span>. I'm also <br/>
          on <span className='text-blue-400 font-semibold'>Twitter</span>,<span className='text-blue-700 antialiased font-semibold'> LinkedIn</span> &<span className='font-semibold text-green-600'>Medium</span>.
        </p>
        <div className='flex justify-around gap-7 pt-20 '>
          <button className='dark:bg-slate-50 bg-purple-600 dark:text-purple-600 text-slate-50 px-6 py-2 rounded-md text-lg font-semibold'>Resume</button>
          <button className='dark:bg-slate-50 bg-purple-600 dark:text-purple-600 text-slate-50 px-6 py-2 rounded-md text-lg font-semibold'>Projects</button>
          <button className='dark:bg-slate-50 bg-purple-600 dark:text-purple-600 text-slate-50 px-6 py-2 rounded-md text-lg font-semibold'>Blog</button>
          <button className='dark:bg-slate-50 bg-purple-600 dark:text-purple-600 text-slate-50 px-6 py-2 rounded-md text-lg font-semibold'>Contact</button>

        </div>
        
        </div>
      </div>
  );
}