import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Dark = ({styles, onClick}:{styles:string, onClick: () => void}) => <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className={styles} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>;
const Light = ({styles, onClick}:{styles:string, onClick: () => void}) => <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className={styles} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>;

const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme();

    let icon;
    
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    switch (theme) {
        case 'dark':
            icon = <Dark onClick={toggleTheme}  styles="h-6 w-6 text-zinc-400 cursor-pointer hover:animate-sun hover:text-yellow-500"/>
            break
        case 'light':
            icon = <Light onClick={toggleTheme}  styles="h-5 w-5 text-zinc-600 cursor-pointer hover:animate-moon"/>
            break
        default:
            icon = <Dark onClick={toggleTheme}  styles="h-6 w-6 text-zinc-400 cursor-pointer hover:animate-sun hover:text-yellow-500"/>
            break
      }
    
      return icon;
};

export default DarkMode;