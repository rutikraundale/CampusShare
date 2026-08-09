import React, { useState } from "react";
import { Search, LogOut, Menu } from "lucide-react";
import { UserIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NotificationBell from "./NotificationBell";

const Navbar = ({ onMenuOpen }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 flex justify-between items-center">

      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-8">

        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuOpen}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] text-white hover:bg-slate-800 rounded-lg transition flex items-center justify-center"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

       {/* Logo Container */}
  <div 
    className="flex items-center gap-2 text-white cursor-pointer" 
    onClick={() => navigate("/")}
  >
    
    <img 
      src="/hackmeetlogo.png" 
      alt="HackMeet Logo" 
      className="w-8 h-8 object-contain" 
    />
  </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 relative">
        <NotificationBell />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="p-2 min-w-[44px] min-h-[44px] rounded hover:bg-slate-800 transition flex items-center justify-center gap-2 text-gray-300 hover:text-red-400"
          title="Sign Out"
        >
          <LogOut className="w-5 h-5" />
        </button>

        {/* Profile */}
        <button
          onClick={handleProfileClick}
          className="w-9 h-9 min-w-[44px] min-h-[44px] rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition overflow-hidden"
        >
          {user?.profilePicture ? (
            <img loading="lazy" src={user.profilePicture} alt="profile" className="w-full h-full object-cover" />
          ) : (
            <UserIcon className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
