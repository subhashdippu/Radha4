import React from "react";
import {
  Home,
  Briefcase,
  FlaskConical,
  Archive,
  UserPlus,
  Gift,
  User,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", icon: <Home size={18} />, path: "/homepage" },
    { name: "Portfolios", icon: <Briefcase size={18} />, path: "/portfolios" },
    {
      name: "Experimentals",
      icon: <FlaskConical size={18} />,
      path: "/experimentals",
    },
    { name: "Slack Archives", icon: <Archive size={18} />, path: "/archives" },
    { name: "Refer a friend", icon: <UserPlus size={18} />, path: "/refer" },
    { name: "Gift a subscription", icon: <Gift size={18} />, path: "/gift" },
    { name: "Account", icon: <User size={18} />, path: "/account" },
  ];

  return (
    <div className="w-64 h-screen border-r-gray-600 bg-white flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-xl font-bold flex items-center space-x-2">
            <span className="text-black">c.</span>
            <span className="text-gray-900">capitalmind</span>
            <span className="text-green-600 font-semibold">premium</span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="mt-4">
          {menuItems.map((item, idx) => (
            <NavLink
              to={item.path}
              key={idx}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-6 py-3 text-sm font-medium cursor-pointer ${
                  isActive
                    ? "bg-gray-100 text-gray-900 border-gray-300"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
              RN
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </div>

          {/* Subscription Info */}
          <div className="text-right text-xs text-gray-500">
            <p className="font-medium text-gray-600">CMP1Y</p>
            <p>Valid till Apr 19, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
