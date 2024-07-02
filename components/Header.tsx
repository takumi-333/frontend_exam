import Link from "next/link";
import React from "react";

const Header = () => {
    return(
        <header className="fixed z-50 w-screen border-b">
            <div className="container flex flex-row justify-between px-2 py-2 bg-white items-center">
                <Link href="/" className="md:text-2xl sm:text-xl flex flex-row items-center justify-center">
                    My Qiita
                </Link>
            </div>
        </header>
    )
}

export default Header