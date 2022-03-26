import React from 'react'

export default function Navbar() {
    return (
        <div >
            <nav className="navbar container transition" role="navigation" aria-label="main navigation">
                <div className="navbar-brand transition is-justify-content-center is-align-items-center">
                    <a className="navbar-item transition">
                        <h1 className="is-size-3 is-size-4-mobile transition">DREAM LAPTOP</h1>
                    </a>

                    <a role="button" className="navbar-burger transition" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu transition">


                    <div className="navbar-end transition">
                        <div className="navbar-item transition">
                            <a className="navbar-item transition">
                                <strong>Shop</strong>
                            </a>
                            <a className="navbar-item mx-3 transition">
                                Inventory
                            </a>
                            <a className="navbar-item transition">
                                Cart
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
