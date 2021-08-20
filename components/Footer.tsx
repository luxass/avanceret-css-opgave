
export default function Footer() {
    return (
        <footer className="bg-footer-gray">
            <div className="container">
                <div className="row justify-content-between py-5 font">
                    <div className="col-lg-3 border-lg-end border-footer-color">
                        <h4 className="text-uppercase text-footer-color mb-3">
                            Veste
                        </h4>
                    </div>
                    <div className="col-lg-3 px-3 border-lg-end border-footer-color pb-5 pb-lg-0">
                        <h4 className="text-uppercase text-footer-color mb-3">
                            Customer care
                        </h4>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-footer-color"
                                >
                                    Shipping Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-footer-color"
                                >
                                    Returns Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-footer-color"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-footer-color"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 px-3 border-lg-end border-footer-color pb-3 pb-lg-0">
                        <h4 className="text-uppercase text-footer-color mb-3">
                            Visit our store
                        </h4>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-footer-color"
                                >
                                    500 Terry Francois Street
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none text-footer-color"
                                >
                                    San Francisco, CA 94158
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 px-3">
                        <h4 className="text-uppercase text-footer-color mb-3">
                            Stay connected
                        </h4>
                        <div className="d-flex">
                            <a
                                href="#"
                                className="text-decoration-none text-footer-color fs-3 p-3"
                            >
                                <i className="fa fa-instagram" />
                            </a>
                            <a
                                href="#"
                                className="text-decoration-none text-footer-color fs-3 p-3"
                            >
                                <i className="fa fa-facebook-f" />
                            </a>
                            <a
                                href="#"
                                className="text-decoration-none text-footer-color fs-3 p-3"
                            >
                                <i className="fa fa-twitter" />
                            </a>
                            <a
                                href="#"
                                className="text-decoration-none text-footer-color fs-3 p-3"
                            >
                                <i className="fa fa-pinterest-p" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark">
                <a
                    href="#"
                    className="text-center text-footer-gray d-block text-decoration-none py-3 bg-dark-gray"
                >
                    &copy; 2023 by VESTE. Proudly created
                </a>
            </div>
        </footer>
     
    );
}
