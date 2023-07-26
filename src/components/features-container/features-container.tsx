"use client";
import React, { ReactNode } from "react";

interface CardProps {
    title?: string;
    text?: string;
    CustomIcon: ReactNode;
    children?: ReactNode;
};

export const FeaturesContainer: React.FC<CardProps> = ({ children, CustomIcon, title, text }) => {

    return (
        <div className="grid gap-4 justify-center">
            <div className="flex justify-center items-center">
                {CustomIcon}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-center">{title}</h3>
            <span className="tracking-tight text-center">
                {text}
            </span>
        </div>
    );
};