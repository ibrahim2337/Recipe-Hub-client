/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const signOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {});
    };

    const handleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <div className="sticky top-0 z-50 shadow-md bg-zinc-100">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative grid grid-cols-12">
                    <div className="lg:col-span-3 col-span-7 flex justify-start items-center">
                        <Link
                            to="/"
                            aria-label="Recipe Hub"
                            title="Recipe Hub"
                            className="inline-flex items-center"
                        >
                            <span className="ml-2 text-xl font-bold tracking-wide text-neutral uppercase">
                                Recipe Hub
                            </span>
                        </Link>
                    </div>
                    <ul className="col-span-6 justify-center items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to="/home"
                                aria-label="Our HomePage"
                                title="Our HomePage"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                                        : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                aria-label="Blog"
                                title="Blog"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary font-medium tracking-wide transition-colors duration-200 hover:text-primary"
                                        : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    {user?.uid ? (
                        <div className="col-span-3 hidden lg:block">
                            <div className="flex items-center justify-end">
                                <div className="relative">
                                    {user?.photoURL ? (
                                        <img
                                            onClick={() => handleProfileMenu()}
                                            className="h-8 w-8 rounded-full cursor-pointer"
                                            alt=""
                                            src={user.photoURL}
                                        />
                                    ) : (
                                        <img
                                            onClick={() => handleProfileMenu()}
                                            className="h-8 w-8 rounded-full cursor-pointer"
                                            alt=""
                                            src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                                        />
                                    )}
                                    <ul
                                        className={`${
                                            isProfileMenuOpen
                                                ? "block"
                                                : "hidden"
                                        }  absolute border rounded-md top-10 right-0 w-28 bg-white`}
                                    >
                                        <li className="px-3 h-10 flex items-center justify-center hover:bg-black/[0.03] font-medium text-black">
                                            {user?.displayName}
                                        </li>
                                        <hr />
                                        <li className="px-3 h-10 flex items-center justify-center hover:bg-red-400 rounded-b-md font-medium text-black">
                                            <Link onClick={signOut}>
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to="/login"
                                    className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                                    aria-label="Register"
                                    title="Register"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}

                    {/* Mobile menu start here */}

                    <div className="lg:hidden col-span-5 flex justify-end items-center">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg
                                className="w-5 text-gray-600"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {user?.uid ? (
                            <div className="col-span-3 hidden lg:block">
                                <div className="flex items-center justify-end">
                                    <div className="relative">
                                        {user?.photoURL ? (
                                            <img
                                                onClick={() =>
                                                    handleProfileMenu()
                                                }
                                                className="h-8 w-8 rounded-full cursor-pointer"
                                                alt=""
                                                src={user.photoURL}
                                            />
                                        ) : (
                                            <img
                                                onClick={() =>
                                                    handleProfileMenu()
                                                }
                                                className="h-8 w-8 rounded-full cursor-pointer"
                                                alt=""
                                                src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                                            />
                                        )}
                                        <ul
                                            className={`${
                                                isProfileMenuOpen
                                                    ? "block"
                                                    : "hidden"
                                            }  absolute border rounded-md top-10 right-0 w-28 bg-white`}
                                        >
                                            <li className="px-3 h-10 flex items-center justify-center hover:bg-black/[0.03] font-medium text-black">
                                                {user?.displayName}
                                            </li>
                                            <hr />
                                            <li className="px-3 h-10 flex items-center justify-center hover:bg-red-400 rounded-b-md font-medium text-black">
                                                <Link onClick={signOut}>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
                                <li>
                                    <Link
                                        to="/login"
                                        className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500  bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                                        aria-label="Register"
                                        title="Register"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-zinc-100 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <Link
                                                to="/"
                                                aria-label="Recipe Hub"
                                                title="Recipe Hub"
                                                className="inline-flex items-center"
                                            >
                                                <span className="ml-2 text-xl font-bold tracking-wide text-neutral uppercase">
                                                    Recipe Hub
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="flex">  
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="flex justify-center items-center h-auto ml-3 p-2 -mr-2 transition duration-200 rounded hover:bg-gray-200"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                <svg
                                                    className="w-5 text-gray-600"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/home"
                                                    aria-label="Our Homepage"
                                                    title="Our Homepage"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                                            : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                                    }
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-primary"
                                                            : "font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                                    }
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            {user?.uid ? (
                                                <></>
                                            ) : (
                                                <div>
                                                    <li className="mb-5">
                                                        <Link
                                                            to="/login"
                                                            aria-label="Log in"
                                                            title="Log in"
                                                            className="font-medium tracking-wide text-neutral transition-colors duration-200 hover:text-primary"
                                                        >
                                                            Log in
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/register"
                                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-secondary transition duration-200 rounded shadow-md bg-primary hover:bg-neutral"
                                                            aria-label="Register"
                                                            title="Register"
                                                        >
                                                            Register
                                                        </Link>
                                                    </li>
                                                </div>
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
