import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/image/hero image/logo.png";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";

function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenus = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const [isOpenLogin, setiSOpenLogin] = useState(false);
  const loginRef = useRef(null);
  const toggleUser = () => {
    setiSOpenLogin(!isOpenLogin);
  };
//   useEffect(() => {
//     const outSideClick = (ok) => {
//       if (loginRef.current && !loginRef.current.contains(ok.target))
//         setiSOpenLogin(false);
//     };

//     document.addEventListener("click", outSideClick);
//     return () => {
//       document.removeEventListener("click", outSideClick);
//     };
//   }, []);

  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const signUpRef = useRef(null);
  const tggoleSignUp = () => {
    setIsOpenSignUp(!isOpenSignUp);
  };
//   useEffect(() => {
//     const outSideClick = (event) => {
//       if (signUpRef.current && !signUpRef.current.contains(event.target))
//         setIsOpenSignUp(false);
//     };
//     document.addEventListener("click", outSideClick);
//     return () => {
//       document.removeEventListener("click", outSideClick);
//     };
//   }, []);

  return (
    <div className="bg-white py-8 shadow-lg">
      <div className="flex items-center w-10/12 mx-auto justify-between">
        <div>
          <Link to="/">
            <img className="w-[180px]" src={Logo} alt="" />
          </Link>
        </div>

        <div onClick={toggleMenus} className="flex items-center gap-3 relative cursor-pointer">
          <RiMenuUnfold3Fill size={35} className="" />
          <h1 className="text-xl font-semibold">Category</h1>
        </div>

        <div>
          <ul
            className={`${
              isCategoriesOpen
                ? " text-xl text-gray-500 w-[300px] h-[560px] bg-white rounded-md absolute p-8 top-44 left-96 z-10 shadow-lg "
                : "hidden"
            }`}
          >
            <li className="flex flex-col gap-4">
              {categories.map((categorie, index) => (
                <Link key={index} to={`/categories/${categorie.id}`}>
                  <div className="flex gap-3 cursor-pointer">
                    <img
                      className="w-[20px] h-[20px]"
                      src={categorie.icon}
                      alt=""
                    />
                    <h1 className="">{categorie.name}</h1>
                  </div>
                </Link>
              ))}
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center gap-7">
            <div className="flex gap-0.5 items-center">
              <Link to="/">
                <li className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500">
                  Home
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/courses">
                {" "}
                <li className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500">
                  Courses
                </li>
              </Link>
            </div>

            <div className="flex gap-0.5 items-center">
              <Link to="/blog">
                {" "}
                <li className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500">
                  Blog
                </li>
              </Link>
            </div>

            <Link to="/about">
              {" "}
              <li className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500">
                About Us
              </li>
            </Link>

            <Link to="/contact">
              <li className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <div className="relative">
          <Link to="/cart">
            <PiShoppingBagOpenFill size={30} />
            <p className="w-[25px] h-[25px] bg-[#0071DC] rounded-full text-white text-lg grid place-items-center absolute -top-2 ml-5">
              0
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-6 relative">
          <Link onClick={toggleUser} ref={loginRef}>
            {" "}
            <button className="text-xl cursor-pointer font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500">
              Log in
            </button>
          </Link>
          <Link onClick={tggoleSignUp} ref={signUpRef}>
            <button className="btn px-4 py-7 cursor-pointer text-xl font-semibold rounded-lg border-none bg-[#e5f1fb] hover:bg-[#0d78dd] text-[#0d78dd] hover:text-white ">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Login Page */}
        <div
          className={`${
            isOpenLogin
              ? "w-[530px] h-[750px] bg-white shadow-lg rounded-lg ml-[500px] absolute top-[179px] p-10"
              : "hidden"
          } `}
        >
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <h2 className="text-xl text-gray-600 text-center mt-6">
            Don't have an account yet?{" "}
            <span className="text-black font-semibold">Sign up for free</span>
          </h2>

          <div className="mt-6">
            <h1 className="text-2xl text-gray-600">USERNAME OR EMAIL</h1>
            <input
              className="w-[450px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3"
              type="text"
              placeholder="Your username or email"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl text-gray-600">PASSWORD</h1>
            <input
              className="w-[450px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3 relative"
              type="text"
              placeholder="Password"
            />
            <MdOutlineRemoveRedEye
              className="text-gray-700 absolute right-12 top-[345px]"
              size={25}
            />
          </div>

          <div className="mt-12">
            <button className="btn w-[450px] h-[75px] bg-[#0071dc] text-2xl text-white rounded-lg border-none hover:bg-yellow-500 hover:text-black">
              Login
            </button>
          </div>

          <div className="flex items-center gap-8 justify-center mt-14">
            <hr className="w-[120px] text-gray-300" />
            <h1 className="text-xl text-gray-600">or Log-in with</h1>
            <hr className="w-[120px] text-gray-300" />
          </div>

          <div className="flex items-center justify-between mt-14">
            <div className="flex">
              <RiFacebookFill
                className="text-[#0071dc] absolute mt-5 ml-4"
                size={25}
              />
              <button className="btn w-[200px] h-[70px] bg-base-200 rounded-lg text-xl hover:outline-1 outline-black border-none">
                Facebook
              </button>
            </div>
            <div className="flex">
              <FaGoogle
                className="text-[#0071dc] absolute mt-5 ml-4"
                size={25}
              />
              <button className="btn w-[200px] h-[70px] bg-base-200 rounded-lg text-xl hover:outline-1 outline-black border-none">
                Google
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Page */}
        <div
          className={`${
            isOpenSignUp
              ? "w-[800px] h-[750px] bg-white shadow-lg rounded-lg ml-[350px] absolute top-[179px] p-10"
              : "hidden"
          } `}
        >
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <h2 className="text-xl text-gray-600 text-center mt-6">
            Already have an account?
            <span className="text-black font-semibold">Log in</span>
          </h2>

          <div className="flex items-center justify-between">
            <div className="mt-6">
              <h1 className="text-2xl text-gray-600">FIRST NAME</h1>
              <input
                className="w-[300px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl text-gray-600">LAST NAME</h1>

              <input
                className="w-[300px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-6">
              <h1 className="text-2xl text-gray-600">USER NAME</h1>
              <input
                className="w-[300px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3 relative"
                type="text"
                placeholder="User Name"
              />
            </div>

            <div className="mt-6">
              <h1 className="text-2xl text-gray-600">EMAIL</h1>
              <input
                className="w-[300px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3 relative"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-6">
              <h1 className="text-2xl text-gray-600">PASSWORD</h1>
              <input
                className="w-[300px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3 relative"
                type="text"
                placeholder="Password"
              />
              <MdOutlineRemoveRedEye
                className="text-gray-700 translate-x-64 -translate-y-10"
                size={25}
              />
            </div>

            <div className="mt-6">
              <h1 className="text-2xl text-gray-600">RE-ENTER-PASSWORD</h1>
              <input
                className="w-[300px] h-[60px] bg-base-200 rouneded-lg outline-[#0071dc] px-4 mt-3 relative"
                type="text"
                placeholder="Re-Enter-Password"
              />
              <MdOutlineRemoveRedEye
                className="text-gray-700 translate-x-64 -translate-y-10"
                size={25}
              />
            </div>
          </div>

          <h1 className="text-xl text-gray-600">
            Accept the Terms and Privacy Policy
          </h1>

          <div className="mt-12">
            <button className="btn w-[720px] h-[75px] bg-[#0071dc] text-2xl text-white rounded-lg border-none hover:bg-yellow-500 hover:text-black">
              Register
            </button>
          </div>

          <div className="flex items-center justify-between mt-14"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
