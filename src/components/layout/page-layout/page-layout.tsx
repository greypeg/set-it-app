import React, { PropsWithChildren } from "react";
import { Footer } from "~/components/footer"
import { Navbar } from "~/components/navbar";

export const Layout: React.FC = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};