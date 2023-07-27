"use client";
import React, { ReactNode } from "react";

interface CardProps {
    title?: string;
    text?: string;
    color?: string;
    children?: ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {

    return (
        <div className={"flex max-w-xs flex-col gap-4 rounded-xl bg-white p-4 w-96 h-64 text-white"}>
            <div className="text-4xl font-bold tracking-tight">
                {children}
            </div>
        </div>
    );
};