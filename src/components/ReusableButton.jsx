import React from "react";

const ReusableButton = ({ children, onClick, type = "button", className }) => (
  <button
    type={type}
    className={`bg-white text-black px-10 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 font-medium ${className}`}
  >
    {children}
  </button>
);

export default ReusableButton;