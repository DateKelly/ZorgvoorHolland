import React from 'react';
import logo from "../assets/logo.jpg";

export const Logo = ({ className="w-40" }: { className?: string }) => (
    <img src={logo} alt="Logo" className={className} />
);
