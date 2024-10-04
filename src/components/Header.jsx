import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerFromTop, setHeaderFromTop] = useState(0);
  const location = useLocation();
  const { auth } = useAuth();

  const textStyle =
    location.pathname === "/clubs" ? "text-white shadow-lg" : "!text-primary";

  const activeClassName = ({ isActive }) => {
    return isActive
      ? {
          fontWeight: "bold",
        }
      : { fontWeight: null };
  };

  useEffect(() => {
    const setTopShift = () => {
      setHeaderFromTop(scrollY);
    };

    window.addEventListener("scroll", setTopShift);

    return () => {
      window.removeEventListener("scroll", setTopShift);
    };
  }, []);

  let iconColor = "#36454F";

  if (location.pathname === "/clubs" && headerFromTop <= 0) {
    iconColor = "#fff";
  }

  return (
    <header
      className={`${textStyle} ${
        headerFromTop > 0
          ? "shadow backdrop-blur-lg bg-opacity-80 bg-light-bg !text-primary"
          : "bg-transparent"
      } fixed w-full z-10`}
      id="header"
    >
      <section className="container p-4 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold ">
          <NavLink to="/">Abba school</NavLink>
        </h1>

        <nav
          className={`max-md:bg-primary max-md:text-white max-md:transition-transform max-md:duration-300 max-md:ease-in-out ${
            isMenuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
          } md:relative max-md:absolute max-md:right-0  max-md:top-0 max-md:px-12 max-md:py-16 max-md:w-72 max-[300px]:w-full max-md:h-screen`}
          aria-label="Desktop Nav"
        >
          <div
            id="close-mobile-menu"
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden cursor-pointer absolute top-3 left-3"
          >
            <MdClose size="1.8em" />
          </div>
          <ul className="flex md:flex-row flex-col gap-4 text-sm p-1">
            <li className="hover:opacity-90 px-1">
              <NavLink
                to="/"
                className="max-md:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={activeClassName}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:opacity-90 px-1">
              <NavLink
                to="/about"
                className="max-md:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={activeClassName}
              >
                About
              </NavLink>
            </li>
            <li className="hover:opacity-90 px-1">
              <NavLink
                to="/staff"
                className="max-md:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={activeClassName}
              >
                Staff
              </NavLink>
            </li>
            <li className="hover:opacity-90 px-1">
              <NavLink
                to="/clubs"
                className="max-md:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={activeClassName}
              >
                Clubs
              </NavLink>
            </li>
            <li className="hover:opacity-90 px-1">
              <NavLink
                to="/departments"
                className="max-md:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={activeClassName}
              >
                Departments
              </NavLink>
            </li>
            <li className="hover:opacity-90 px-1">
              <NavLink
                to="/dashboard"
                className="max-md:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={activeClassName}
              >
                Dashboard
              </NavLink>
            </li>
            {auth?.user ? null : (
              <>
                <li className="hover:opacity-90 px-1">
                  <NavLink
                    to="/login"
                    className="max-md:text-white font-medium md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    style={activeClassName}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="hover:opacity-90 px-1 md:hidden">
                  <NavLink
                    to="/register"
                    className="max-md:text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    style={activeClassName}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        {auth?.user ? null : (
          <div className="hidden md:flex gap-4 text-sm">
            <NavLink
              className="flex items-center justify-center font-semibold"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink className="btn-primary" to="/register">
              Register
            </NavLink>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={iconColor}
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
