"use client";
import React, { ReactNode } from 'react';


export type CustomIconType = {
    size: string
    children: ReactNode
};

export const Icon: React.FC<CustomIconType> = ({ size, children }) => (
    <svg width={size} height={size} viewBox="0 0  24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
);

export default Icon;