"use client";
import React from "react";

type CardWithBorderProps = {
    title: string;
    text: string;
};

export const CardWithBorder: React.FC<CardWithBorderProps> = ({ title, text }) => {

    return (
        <div
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white p-4 border-2 border-black hover:"
        >
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="text-lg">
                {text}
            </div>
        </div>
    );
};