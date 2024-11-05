import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const academicRef = useRef(null);
  const userMenuRef = useRef(null);
  const { user ,logOut} = useContext(AuthContext)
  
  console.log(user)


  const toggleAcademicMenu = () => setIsAcademicOpen(!isAcademicOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (academicRef.current && !academicRef.current.contains(event.target)) {
        setIsAcademicOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] text-[#ffffff] px-4 py-4 shadow-lg relative z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-semibold"
        >
          <Link to="/">
            <img className="h-[60px]" src={Logo} alt="Logo" />
          </Link>
        </motion.div>

        {/* Main Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-[#ff4b4b]"
          >
            <Link to={`/`}>Home</Link>
          </motion.div>

          <div className="relative" ref={academicRef}>
            <motion.div
              onClick={toggleAcademicMenu}
              className="cursor-pointer hover:text-[#32cd32]"
              whileHover={{ scale: 1.1 }}
            >
              Academic
            </motion.div>
            <AnimatePresence>
              {isAcademicOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-[250px] bg-[#f0f4ff] text-[#1e3a8a] rounded-lg shadow-lg"
                >
                  <ul className="py-4 z-50">
                    {[
                      "Managing Committee",
                      "Teacher's Information",
                      "Admin/Staff",
                      "All Student Information",
                      "All Headmaster",
                      "All Success Student Information",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-6 py-3 text-lg hover:bg-[#32cd32] z-50 hover:text-[#ffffff]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}

          {["Notice", "Result", "About", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-[#ff4b4b]"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
                  <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <button
 onClick={()=>logOut() }         
            className="bg-[#ff4b4b] text-[#ffffff] px-5 py-2 rounded-md hover:bg-[#d63333] shadow-md"
          >
            Logout
          </button>
        </motion.div>
            </>
          ): (<>
          <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/login"
            className="bg-[#ff4b4b] text-[#ffffff] px-5 py-2 rounded-md hover:bg-[#d63333] shadow-md"
          >
            Login
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/signup"
            className="bg-[#32cd32] text-[#ffffff] px-5 py-2 rounded-md hover:bg-[#28a745] shadow-md"
          >
            Sign Up
          </Link>
        </motion.div>
 </>)}
        </div>

        {/* Mobile User Menu */}
        <div className="md:hidden flex items-center">
          <img
            src="/path/to/user-image.png"
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleUserMenu}
          />
          <AnimatePresence>
            {isUserMenuOpen && (
              <motion.div
                ref={userMenuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-3 top-2 mt-12 w-[80%] px-2 bg-[#f0f4ff] text-[#1e3a8a] rounded-lg shadow-lg"
              >
                <ul className="py-4">
                  <li>
                    <Link to={'/'} className="block px-6 py-3 cursor-pointer hover:bg-[#32cd32] hover:text-[#ffffff]">
                      Home
                    </Link>
                    {isAcademicOpen && (
                      <ul className="pl-6 mt-2 space-y-2 bg-[#dbeafe] rounded-lg">
                        {[
                          "Managing Committee",
                          "Teacher's Information",
                          "Admin/Staff",
                          "All Student Information",
                          "All Headmaster",
                          "All Success Student Information",
                        ].map((item) => (
                          <li key={item}>
                            <Link
                              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                              className="block px-4 py-2 hover:bg-[#32cd32] hover:text-[#ffffff]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      onClick={toggleAcademicMenu}
                      className="block px-6 py-3 cursor-pointer hover:bg-[#32cd32] hover:text-[#ffffff]"
                    >
                      Academic
                    </div>
                    {isAcademicOpen && (
                      <ul className="pl-6 mt-2 space-y-2 bg-[#dbeafe] rounded-lg">
                        {[
                          "Managing Committee",
                          "Teacher's Information",
                          "Admin/Staff",
                          "All Student Information",
                          "All Headmaster",
                          "All Success Student Information",
                        ].map((item) => (
                          <li key={item}>
                            <Link
                              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                              className="block px-4 py-2 hover:bg-[#32cd32] hover:text-[#ffffff]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {["Notice", "Result", "About", "Information", "Contact"].map(
                    (item) => (
                      <li key={item} className="hover:bg-[#ff4b4b]">
                        <Link
                          to={`/${item.toLowerCase()}`}
                          className="block px-6 py-3 hover:text-[#ffffff]"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                  {
                   user ? (<>
          <li className="border-t mt-4 pt-4">
                    <button
                      onClick={()=>logOut()}
                      className="block px-6 py-3 text-center bg-[#ff4b4b] text-[#ffffff] rounded-md hover:bg-[#d63333] shadow-md my-2"
                    >
                      Logout
                    </button>
                  </li>
                    </>) : (
                        <>
                          <li className="border-t mt-4 pt-4">
                    <Link
                      to="/login"
                      className="block px-6 py-3 text-center bg-[#ff4b4b] text-[#ffffff] rounded-md hover:bg-[#d63333] shadow-md my-2"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block px-6 py-3 text-center bg-[#32cd32] text-[#ffffff] rounded-md hover:bg-[#28a745] shadow-md"
                    >
                      Sign Up
                    </Link>
                  </li></>
                    )
                }
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
