import React from "react";
import Footer from "./Footer";

export default function Layout({ 
                                children, 
                                containerClass,
                                footerClass,
                                logoClass 
                                }: any) {
    return (
        <div className={containerClass}>
            {children}
        <Footer footerClass={footerClass} logoClass={logoClass} />
        </div>
    );
}