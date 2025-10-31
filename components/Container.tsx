'use client';

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; 
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        max-w-[2200px]
        mx-auto
        xl:px-[124px] 
        lg:px-[110px] 
        md:px-24
        sm:px-2
        px-4
        h-full
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
