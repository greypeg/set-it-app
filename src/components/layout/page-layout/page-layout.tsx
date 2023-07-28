import React from "react";
import { Footer } from "~/components/footer"
import { Navbar } from "~/components/navbar";

interface LayoutInterface {
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="font-haskoy flex flex-col h-screen">
                {children}
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
};