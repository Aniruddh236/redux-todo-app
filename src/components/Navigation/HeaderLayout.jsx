import React from "react";
import Header from "./Header";

// import "../../App.css"

export default function Layout({ children }) {

    return <>
        <div>
            <Header />
            <main>{children}</main>
        </div>
    </>

}