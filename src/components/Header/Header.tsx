import NavBar from "./NavBar/NavBar";

const Header = () => {
    return (
        <header>
            <div className="fixed top-0 h-1 w-full z-20 bg-gradient-to-r from-sky-400 to-orange-500 via-purple-500 animate-gradient-x"></div>
            <NavBar/>
        </header>
    )
}

export default Header;