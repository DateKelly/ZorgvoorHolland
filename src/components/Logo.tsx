import React from 'react';
import logo from "../assets/heart2.png";

export const Logo = ({ className="w-16" }: { className?: string }) => (
    <img src={logo} alt="Logo" className={className} />
);
