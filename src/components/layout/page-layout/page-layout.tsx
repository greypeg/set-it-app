import React from "react";
import { Footer } from "~/components/footer"
import { Navbar } from "~/components/navbar";

interface LayoutInterface{
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};