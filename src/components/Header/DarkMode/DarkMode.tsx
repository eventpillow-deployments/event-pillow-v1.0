import { useTheme } from "next-themes";

const DarkMode = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    if(theme === 'dark') {
        return (
            <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-zinc-400 cursor-pointer hover:animate-spin hover:text-yellow-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        )
    } else {
        return (
            <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-600 cursor-pointer hover:animate-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        )
    }
};

export default DarkMode;