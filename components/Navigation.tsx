export default function Navigation() {
    return (
        <div className="d-flex flex-column flex-lg-column-reverse">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        VESTE
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main-nav"
                        aria-controls="main-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="main-nav" className="collapse navbar-collapse">
                        <ul className="w-100 justify-content-between navbar-nav text-uppercase">
                            <li className="nav-item d-lg-none d-block">
                                <a
                                    className="nav-link p-0 text-capitalize mt-3"
                                    href="#"
                                >
                                    <i className="bi bi-person-circle me-2" />
                                    Log In
                                </a>
                            </li>
                            <li className="nav-item ms-lg-3 ps-lg-3">
                                <a href="#" className="nav-link px-0 active">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-0">
                                    Collection
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-0">
                                    Lookbook
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-0">
                                    Customer Care
                                </a>
                            </li>
                            <li className="nav-item mb-3 mb-lg-0">
                                <a href="#" className="nav-link px-0">
                                    Visit Us
                                </a>
                            </li>
                            <li className="nav-item d-lg-none d-block mb-2">
                                <div className="input-group">
                                    <button
                                        className="btn bg-white"
                                        type="button"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control text-uppercase font"
                                        placeholder="Search..."
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-light p-0 fs-7">
                <div className="container">
                    <div className="w-100 d-flex align-items-center">
                        <div className="col-lg-6 p-0 d-lg-block d-none">
                            <div className="input-group">
                                <button className="btn bg-light" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                                <input
                                    type="text"
                                    className="form-control text-uppercase font bg-light border-0"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 p-0">
                            <ul className="w-100 justify-content-lg-start navbar-nav flex-row flex-lg-row-reverse py-lg-0 py-2 font align-items-center">
                                <li className="nav-item mx-3 pe-0 position-relative">
                                    <a className="nav-link p-0 text-dark" href="#">
                                        <span className="position-absolute top-50 start-50 translate-middle text-light">0</span>
                                        <i className="fs-3 bi bi-bag-fill"></i>
                                    </a>
                                </li>
                                <li className="nav-item border-start border-lg-end px-3">
                                    <a
                                        className="nav-link text-uppercase text-dark"
                                        href="#"
                                    >
                                        Free Shipping
                                    </a>
                                </li>

                                <li className="nav-item px-3 d-flex d-lg-block d-none">
                                    <a className="nav-link p-0 text-dark" href="#">
                                        <i className="me-2 fs-5 bi bi-person-circle"></i>
                                        Log In
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
