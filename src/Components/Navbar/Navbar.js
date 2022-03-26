import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand is-justify-content-center is-align-items-center">
                    <a className="navbar-item">
                        <h1 className="is-size-3 is-size-4-mobile">DREAM LAPTOP</h1>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu ">


                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className=" is-primary">
                                <strong>Shop</strong>
                            </a>
                            <a className=" is-light mx-3">
                                Inventory
                            </a>
                            <a className=" is-light">
                                Cart
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
