import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-header">
            <nav className="navbar">
                <section className="navbar-user">
                    <div className="first-bar">
                        <NavLink className="first-bar-item" to="/">Home</NavLink>
                        <NavLink className="first-bar-item" to="/movies">Movies</NavLink>
                    </div>
                    <div className="second-bar">
                        <NavLink className="second-bar-item" to="#">Profile</NavLink>
                        <NavLink className="second-bar-item" to="#">Logout</NavLink>
                    </div>
                </section>
                {/* <section className="navbar-anonymous"></section> */}
            </nav>
        </header>
    );
};

export default Header;
