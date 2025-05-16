import { useState } from 'react';
import chat_app_logo from '../assets/chat_app_logo.png'; // Ensure the path is correct

// eslint-disable-next-line react/prop-types
const Navbar = ({ SignNav, loginNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center gap-8 mx-4 lg:mx-16 relative">
      {/* Logo */}
      <div className="flex items-center text-lg font-semibold">
        <img
          className="ms-4"
          src={chat_app_logo}
          alt="Chat App Logo"
          width={40}
          height={40}
        />
        <p className="ms-2">Chat App</p>
      </div>

      {/* Hamburger Icon (mobile only) */}
      <button
        className="lg:hidden text-3xl me-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-4 text-lg p-2 me-4">
        {["Home", "Testimonials", "Features", "Coming Soon"].map((label, index) => (
          <p
            key={index}
            className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            <a href={`#${label.toLowerCase().replace(/\s/g, "")}`}>{label}</a>
          </p>
        ))}
      </div>

      {/* Buttons (desktop only) */}
      <div className="hidden lg:flex items-center gap-4 font-bold p-2 me-4">
        <button
          className="bg-white border border-solid border-purple1 font-semibold px-4 py-1 rounded-2xl text-purple1 hover:bg-purple1 hover:text-white transition-colors"
          onClick={SignNav}
        >
          Sign Up
        </button>
        <button
          className="bg-purple1 border border-solid border-purple1 font-semibold px-4 py-1 rounded-2xl text-white hover:text-purple1 hover:bg-white transition-colors"
          onClick={loginNav}
        >
          Login
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-4 p-4 font-semibold text-purple-700">
          {["Home", "Testimonials", "Features", "Coming Soon"].map((label, index) => (
            <a
              key={index}
              href={`#${label.toLowerCase().replace(/\s/g, "")}`}
              className="w-full text-center"
            >
              {label}
            </a>
          ))}
          <button
            className="bg-white border border-purple1 font-semibold px-4 py-1 rounded-2xl text-purple1 hover:bg-purple1 hover:text-white transition-colors w-full"
            onClick={SignNav}
          >
            Sign Up
          </button>
          <button
            className="bg-purple1 border border-purple1 font-semibold px-4 py-1 rounded-2xl text-white hover:text-purple1 hover:bg-white transition-colors w-full"
            onClick={loginNav}
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
