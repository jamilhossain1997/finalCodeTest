import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 text-white"><Link href={"/"}>Navbar</Link></span>
                </div>
            </nav>
        </>
    )
}

export default Header