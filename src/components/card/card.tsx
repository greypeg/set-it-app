"use client";
import React, { ReactNode } from "react";

type CardProps = {
    title?: string;
    text?: string;
    color?: string;
    children?: ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, text, children, color }) => {

    return (
        <div
            className={"flex max-w-xs flex-col gap-4 rounded-xl bg-white p-4 bg-[#5856B9] w-96 h-64 text-white"}
        >
            <div className="text-4xl font-bold tracking-tight">
                {children}
            </div>
        </div>
    );
};